/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:26
 */
import React, { useEffect, useState, useRef, useForm } from 'react';
import service from 'Src/utils/request';
import BraftEditor from 'Src/components/BraftEditor';
import { Button, message, Form, Input, Select, Spin, Space } from 'antd';

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
const MangeImgs = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    const query = window.Bmob.Query('blogs');
    Object.keys(values).forEach(keys => {
      if (Array.isArray(values[keys])) {
        query.set(keys, values[keys].join(','))
      } else {
        query.set(keys, values[keys] || '')
      }
    })

    console.log(44, values, window.user);

    query.set('username', window.user.username)
    query.save().then(res => {
      console.log('ok----', res)
    }).catch(err => {
      console.log(4444, err)
    })
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles.wrapper}>
      <Form form={form} name='control-hooks' onFinish={onFinish}>
        <Form.Item
          name='title'
          label='文章标题'
          rules={[{ required: true, message: '请输入文章标题', }]}
        >
          <Input placeholder='请输入文章标题' />
        </Form.Item>

        <BraftEditor
          itemKey='textValue'
          itemLabel='文章内容'
          itemRule={[{ required: true, message: '请输入文章内容', }]}
          placeholder='请输入文章内容'
        ></BraftEditor>

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

        <Form.Item >
          <Space>
            <Button type='primary' htmlType='submit'>提交</Button>
            <Button htmlType='button' onClick={onReset}>重置</Button>
          </Space>
        </Form.Item>
      </Form>

    </div>
  )
}

export default MangeImgs
