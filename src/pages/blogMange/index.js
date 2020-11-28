/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 20:55:30
 */
import React, { useEffect, useState, useRef, useForm,useReducer } from 'react';
import service from 'Src/utils/request';
import {Map,List,fromJS} from 'immutable';
// import AddAndEditBlog from './components/AddAndEditBlog';
import { Button, Tooltip, Select, Form, DatePicker, Input, Table, Tag, Spin, Space, Popconfirm } from 'antd';
// import ReadOnlyMarkdown from 'Src/components/ReadOnlyMarkdown';
import Panel from 'Src/components/Panel';

import moment from 'moment';
import dayjs from 'dayjs';

import styles from './index.css';
console.log('1999--',moment,'111',dayjs,moment===dayjs);

const { Option, } = Select;
const tagList = [
  {
    label: '前端',
    value: '前端',
  },
  {
    label: '后端',
    value: '后端',
  },
  {
    label: 'UI',
    value: 'UI',
  },
];
const typeList = [
  {
    label: '原创',
    value: '原创',
  },
  {
    label: '转载',
    value: '转载',
  },
  {
    label: '翻译',
    value: '翻译',
  },
];

const queryInitData=Map({
  current:1,
  pageSize:10,
  total:0,
  // startTime:new Date(),
  // endTime:new Date(),
})

const queryReducer = (state, action) =>{
  const {type,paload}=action;
  switch(type){
    case 'current_change':
      return state.set('current',paload);
      case 'pageSize_change':
      return state.set('pageSize',paload);
      case 'total_change':
      return state.set('total',paload);
      default:return state;
  }
}

const DraftBlog = (props) => {
  const { history, } = props;
  const [form] = Form.useForm();

  const [queryLoading, set_queryLoading] = useState(false);
  const [queryData, query_Dispatch] = useReducer(queryReducer,queryInitData);

  const [visibleForEditDrawer, set_visibleForEditDrawer] = useState(false);
  const [blogList, set_blogList] = useState([]);

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建人',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: text => text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '-',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: text => text ? text.split(',').map(item => (<Tag key={item}>{item}</Tag>)) : '-',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      render: text => text ? text.split(',').map(item => (<Tag key={item}>{item}</Tag>)) : '-',
    },
    {
      title: '操作',
      dataIndex: 'objectId',
      width:140,
      // eslint-disable-next-line react/display-name
      render: (text, { objectId, username }) => (
        <Space >
          {
            window.user?.username === username ?
              <Popconfirm
                title='确定要删除这篇文章么？'
                okText='确定'
                cancelText='再想想'
                onConfirm={() => deleteBlogFn(objectId)}
              >
                <span className='a-ele' >删除</span>
              </Popconfirm> :
              <Tooltip title="本人才能删除和编辑">
                <span className='disable-ele' >删除</span>
              </Tooltip>
          }
          {
            window.user?.username === username ?
              <a
                className='a-ele'
                target='_blank'
                rel='noopener noreferrer'
                href={`/draftBlog?objectId=${text}`}
              >编辑</a> :
              <Tooltip title="本人才能删除和编辑">
                <span className='disable-ele' >编辑</span>
              </Tooltip>
          }

          <a className='a-ele' target='_blank' rel='noopener noreferrer' href={`/blogDetail?objectId=${text}`} >详情</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
   
  }, [])

  useEffect(() => {
 console.log('15333--',queryData.toJS());
 getBlogListFn()
  }, [queryData])

  const getBlogListFn = (params = {}) => {
    set_queryLoading(true)
    const query = window.Bmob.Query('blogs');
    //我们可以对返回的结果进行排序（只支持number，date，string类型的排序）
    query.order('-createdAt');
    //认情况下，Limit的值为10，最大有效设置值1000（设置的数值超过1000还是视为1000）。
    query.limit(queryData.get('pageSize'));
    //skip方法可以做到跳过查询的前多少条数据来实现分页查询的功能。默认情况下skip的值为10。
    query.skip(queryData.get('pageSize')*(queryData.get('current')-1));
    query.find().then(res => {
      set_blogList(res);
      console.log(118, res)
      setTimeout(() => {
        set_queryLoading(false)
      }, 200)
    });
    //果你只是想统计满足query的结果集到底有多条记录，你可以使用count方法。如为了获得diary表的记录数量
    query.count().then(res => {
      console.log(`777共有${res}条记录`)
      query_Dispatch({ type:'total_change',paload:res})
    });
  }
  const deleteBlogFn = (objectId) => {
    set_queryLoading(true)
    const query = window.Bmob.Query('blogs');
    query.destroy(objectId).then(res => {
      getBlogListFn()
    }).catch(err => {
      console.log(err)
    })
  }

  // const openvisibleForEditDrawer = () => {
  //   // window.user;
  //   if (window.user) {
  //     set_visibleForEditDrawer(true)
  //   } else {
  //     history?.push('/login')
  //   }
  //   console.log(111, window.user)

  //   //
  // }


  const onFinish = values => {
    console.log(values);
    getBlogListFn()
  };
  const onReset = () => {
    form.resetFields();
    getBlogListFn()
  };

  const tableChangeFn=(pagination, filters, sorter)=>{
    console.log('hr--',pagination, filters, sorter);
    query_Dispatch({ type:'current_change',paload:pagination.current});
    query_Dispatch({ type:'pageSize_change',paload:pagination.pageSize});
    query_Dispatch({ type:'total_change',paload:pagination.total});
  }
  return (
    <Panel
    // PanelTopLeftEle={<Button onClick={openvisibleForEditDrawer}>录入文章btn</Button>}
    >
      <Spin spinning={queryLoading}>

        <Form
          className={styles.form_Wrap}
          form={form}
          name='control-hooks'
          onFinish={onFinish}
          initialValues={{ mouthtime: moment('2015/01', 'YYYY/MM'), }}
        >
          <Form.Item
            name='mouthtime'
            label='时间'
          >
            <DatePicker format={'YYYY/MM'} picker='month' />
          </Form.Item>
          <Form.Item name='tags' label='文章标签' >
            <Select mode='tags' tokenSeparators={[',']} placeholder='请选择或输入标签'>
              {
                tagList.map(item => (<Option key={item.value} value={item.value}>{item.label}</Option>))
              }
            </Select>
          </Form.Item>
          <Form.Item name='type' label='文章类型' >
            <Select mode='tags' tokenSeparators={[',']} placeholder='请选择或输入文章类型'>
              {
                typeList.map(item => (<Option key={item.value} value={item.value}>{item.label}</Option>))
              }
            </Select>
          </Form.Item>
          <Form.Item
            name='content'
            label='关键词'
          >
            <Input placeholder='请输入标题或者关键词' />
          </Form.Item>
          <Form.Item
            className={styles.form_item_btns}
          >
            <Button type='primary' htmlType='submit'>查询</Button>
            <Button htmlType='button' onClick={onReset} className={styles.reset_btn}>重置</Button>
          </Form.Item>
        </Form>

        <Table
          dataSource={blogList}
          columns={columns}
          rowKey='objectId'
          onChange={tableChangeFn}
          pagination={{ 
            current:queryData.get('current'),
            pageSize:queryData.get('pageSize'),
            total:queryData.get('total'),
            showQuickJumper:true,
            showTotal:total => `共 ${total} 条`,
          }}
        />
      </Spin>
    </Panel>
  )
}

export default DraftBlog
