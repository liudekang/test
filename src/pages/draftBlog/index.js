/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 20:35:18
 */
import React, { useEffect, useState, useRef, useForm } from 'react';
import service from 'Src/utils/request';
import { parse, stringify } from 'qs';
import BraftEditor from 'Src/components/BraftEditor';
import { Button, message, Form, Input, Select, Spin, Space, Popconfirm } from 'antd';
import Panel from 'Src/components/Panel';

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
const panelConfigs = [
  {
    name: '首页',
    // path:'/'
  }
];

const MangeImgs = (props) => {
  const { history, } = props;

  const [form] = Form.useForm();
  const [reqLoading, set_reqLoading] = useState(false);
  const [descVal, set_descVal] = useState();
  const [textValue, set_textValue] = useState();

  const [editBlogDetail, set_editBlogDetail] = useState();

  useEffect(() => {
    const getParams = parse(history.location.search.substr(1));
    if (getParams.objectId) {
      const query = window.Bmob.Query('blogs');
      query.get(getParams.objectId).then(res => {
        res.id = getParams.objectId;
        set_editBlogDetail(res)
        console.log(8888, res)
      }).catch(err => {
        console.log(err)
      })
    }

    // console.log('hr--', history, getParams, history.location.search.substr(1));

  }, [])

  useEffect(() => {
    if (editBlogDetail && typeof editBlogDetail === 'object') {
      const initObj = { ...editBlogDetail, };
      for (const keys of Object.keys(initObj)) {
        if (['tags', 'type'].includes(keys) && initObj[keys]) {
          initObj[keys] = initObj[keys].split(',');
        }
      }
      console.log('87777--', initObj);

      form.setFieldsValue({
        ...initObj,
      });
    }
  }, [editBlogDetail])

  const onFinish = values => {
    if (!textValue || textValue === '<p></p>') {
      return message.warning('请输入正文内容！')
    }
    set_reqLoading(true);
    const getValues = { ...values };
    getValues.description = descVal;
    getValues.textValue = textValue;
    const query = window.Bmob.Query('blogs');
    if (editBlogDetail?.objectId) {
      query.set('id', editBlogDetail?.objectId) //需要修改的objectId
    }
    Object.keys(getValues).forEach(keys => {
      if (Array.isArray(getValues[keys])) {
        query.set(keys, getValues[keys].join(','))
      } else {
        query.set(keys, getValues[keys] || '')
      }
    })
    // console.log(44, getValues, editBlogDetail, window.user);

    query.set('username', window.user.username)
    query.save().then(res => {
      console.log('ok----', res)
      message.success('保存成功')
      setTimeout(() => {
        set_reqLoading(false)
        history?.push('/blogMange');
      }, 300)
    }).catch(err => {
      console.log(4444, err)
      message.error('操作失败')
      setTimeout(() => {
        set_reqLoading(false)
      }, 300)
    })
  };
  const onReset = () => {
    form.resetFields();
  };


  const zhaiyaoEle = (
    <div className={styles.desc_wrap}>
      <h4 className={styles.desc_title}>生成摘要</h4>
      <Form.Item
        name='description'
        // label='摘要'
        rules={[{ required: false, message: '请输入文章摘要', }]}
      >
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 12 }} placeholder='请输入文章摘要' />
      </Form.Item>
    </div>
  )

  const descCancel = () => {
    form.setFieldsValue({
      description: descVal,
    });
  }

  const descConfirm = () => {
    set_descVal(form.getFieldValue('description'))

  }

  const onChangeBack = (val) => {
    console.log('1555--', val);
    set_textValue(val);
  }

  return (
    <Panel
    // panelConfigs={panelConfigs}
    // PanelTopLeftEle={panelTopEle}
    >
      <div className={styles.draftBlog_wrapper}>
        <Spin spinning={reqLoading}>
          <Form form={form} name='control-hooks' onFinish={onFinish}>
            <div className={styles.Blog_title_wrapper}>
              <Form.Item
                className={styles.Blog_title_ipyt}
                name='title'
                // label='文章标题'
                rules={[{ required: true, message: '请输入文章标题', }]}
              >
                <Input maxLength={120} placeholder='请输入文章标题' />
              </Form.Item>
              <Form.Item >
                <Space>
                  <Popconfirm
                    overlayClassName={styles.desc_popconfirm}

                    placement="bottomRight"
                    title={zhaiyaoEle}
                    onCancel={descCancel}
                    onConfirm={descConfirm}
                    okText="保存摘要"
                    cancelText="取消"
                  >
                    <Button htmlType='button' >添加摘要</Button>
                  </Popconfirm>

                  <Button type='primary' htmlType='submit'>提交</Button>
                </Space>
              </Form.Item>
            </div>

            <BraftEditor
              // itemKey='textValue'
              // itemLabel='文章内容'
              defaultValue={editBlogDetail?.textValue}
              BraftEditorCallBackFn={onChangeBack}
              // itemRule={[{ required: true, message: '请输入文章内容', }]}
              placeholder='请输入文章内容'
            ></BraftEditor>

            <div className={styles.blog_type_wrap}>
              <Form.Item name='tags' label='文章标签' >
                <Select mode='tags'
                  // tokenSeparators={[',']}
                  placeholder='请选择或输入标签'>
                  {
                    tagList.map(item => (<Option key={item.value} value={item.value}>{item.label}</Option>))
                  }
                </Select>
              </Form.Item>
              <Form.Item name='type' label='文章类型' >
                <Select mode='tags'
                  // tokenSeparators={[',']}
                  placeholder='请选择或输入文章类型'>
                  {
                    typeList.map(item => (<Option key={item.value} value={item.value}>{item.label}</Option>))
                  }
                </Select>
              </Form.Item>
            </div>



          </Form>
        </Spin>
      </div>

    </Panel>
  )
}

export default MangeImgs
