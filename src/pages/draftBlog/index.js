/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:26
 */
import React, { useEffect, useState, useRef, useForm } from 'react';
import service from 'Src/utils/request';
import AddAndEditBlog from './components/AddAndEditBlog';
import { Button, Drawer, Select, Form, DatePicker, Input, Table, Tag, Spin, Space, Popconfirm } from 'antd';
import ReadOnlyMarkdown from 'Src/components/ReadOnlyMarkdown';
import Panel from 'Src/components/Panel';

import moment from 'moment';

import styles from './index.css';

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

const DraftBlog = ({ history, }) => {
  const [form] = Form.useForm();

  const [queryLoading, set_queryLoading] = useState(false);

  const [visibleForEditDrawer, set_visibleForEditDrawer] = useState(false);
  const [blogList, set_blogList] = useState([]);
  const [detailData, set_detailData] = useState('');
  const [visibleForReadMoreDrawer, set_visibleForReadMoreDrawer] = useState(false);

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
      dataIndex: 'textValue',
      // eslint-disable-next-line react/display-name
      render: (text, { objectId, }) => (
        <Space
          className={styles.read_mord}
        >
          <Popconfirm
            title='确定要删除这篇文章么？'
            okText='确定'
            cancelText='再想想'
            onConfirm={() => deleteBlogFn(objectId)}
          >
            <span >删除</span>
          </Popconfirm>

          <span onClick={() => openvisibleForReadMoreDrawer(text || '')}>详情</span>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getBlogListFn()
  }, [])

  const getBlogListFn = (params = {}) => {
    set_queryLoading(true)
    const query = window.Bmob.Query('blogs');
    query.find().then(res => {
      set_blogList(res);
      setTimeout(() => {
        set_queryLoading(false)
      }, 200)
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

  const openvisibleForEditDrawer = () => {
    // window.user;
    if (window.user) {
      set_visibleForEditDrawer(true)
    } else {
      history?.push('/login')
    }
    console.log(111, window.user)

    //
  }
  const onClosevisibleForEditDrawer = () => {
    set_visibleForEditDrawer(false)
  }

  const openvisibleForReadMoreDrawer = (text) => {
    set_visibleForReadMoreDrawer(true)
    set_detailData(text)
  }
  const onClosevisibleForReadMoreDrawer = () => {
    set_visibleForReadMoreDrawer(false)
  }

  const onFinish = values => {
    console.log(values);
    getBlogListFn()
  };
  const onReset = () => {
    form.resetFields();
    getBlogListFn()
  };
  return (
    <Panel
      PanelTopLeftEle={<Button onClick={openvisibleForEditDrawer}>录入文章btn</Button>}
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
        />
      </Spin>
      <Drawer
        title='录入文章'
        placement='right'
        width='70%'
        onClose={onClosevisibleForEditDrawer}
        visible={visibleForEditDrawer}
      >
        <AddAndEditBlog></AddAndEditBlog>
      </Drawer>
      <Drawer
        title='文章详情'
        placement='right'
        width='70%'
        onClose={onClosevisibleForReadMoreDrawer}
        visible={visibleForReadMoreDrawer}
      >
        <ReadOnlyMarkdown
          data={detailData}
          className={styles.read_only_wrapper}
        />
      </Drawer>

    </Panel>
  )
}

export default DraftBlog