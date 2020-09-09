/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:26
 *
 * 可传参数
 * itemKey  --- key值
 * itemLabel --- label名
 * itemClassName --- 内置item的类名
 * itemRule --- 规则
 *
 * className --- 类名
 * placeholder
 * BraftEditorCallBackFn  --- 实时返回 html值
 *
 */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import service from 'Src/utils/request';
import { Button, message, Form } from 'antd';
import ReactMarkdown from 'react-markdown';
//过滤xss的插件
// import DOMPurify from 'dompurify';
// var clean = DOMPurify.sanitize(dirty);
import CodeBlock from './CodeBlock';
import HeadingBlock from './HeadingBlock';

// import styles from './index.css';
import './style.less';

const MangeImgs = ({ data, className, }) => {
  // const [form] = Form.useForm();
  // const [client, set_client] = useState()

  // const input = '# This is a header\n\nAnd this is a paragraph'
  return (
    <ReactMarkdown
      className={'React_Markdown_readonly ' + className}
      source={data}
      escapeHtml={false}
      renderers={{
        code: CodeBlock,
        heading: HeadingBlock,
      }}
    />
  )
}
MangeImgs.propTypes = {
  data: PropTypes.string,
  // itemLabel: PropTypes.string,
  // itemClassName: PropTypes.string,
  // itemRule: PropTypes.array,

  className: PropTypes.string,
  // placeholder: PropTypes.string,
  // BraftEditorCallBackFn: PropTypes.func,
}
MangeImgs.defaultProps = {
  // itemKey: 'remark',
  data: '',
  className: '',
};
export default MangeImgs
