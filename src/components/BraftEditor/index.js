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
import OSS from 'ali-oss';
import BraftEditor from 'braft-editor'

// import styles from './index.css';
import './style.less';

const MangeImgs = (props) => {
  // const [form] = Form.useForm();
  const { defaultValue, itemKey, itemLabel, itemRule, itemClassName, className, placeholder, BraftEditorCallBackFn, } = props;
 
  const [editorState, set_EditorState] = useState(
    BraftEditor.createEditorState('result.details')
  );

  const client = useRef(null);

  // 获取OSS配置，实例化oss
  useEffect(() => {
    const osConfigstr = localStorage.getItem('os-hang-zhou-config'); 
    if (osConfigstr) {
      createClintFn(osConfigstr)
    } else {
      const query = window.Bmob.Query('api_config');
      query.get('rCad333D').then(res => {
        console.log(444, res)
        if (res.value) {
          createClintFn(res.value);
          localStorage.setItem('os-hang-zhou-config', res.value)
        }
      }).catch(err => {
        console.warn('errr==', err)
        message.error('获取oss配置失败')
      })
    }
  }, [])

  useEffect(() => {
    if (defaultValue) {
      // console.log('4754574hr--', defaultValue); 
      set_EditorState(BraftEditor.createEditorState(defaultValue))
    }
  }, [defaultValue])


  const createClintFn = (osConfigstr) => {
    let osConfig = {};
    if (typeof osConfigstr === 'string') {
      try {
        osConfig = JSON.parse(osConfigstr.replace(/[\n\r]/g, ''));
      } catch (error) {
        console.warn(55, error)
        message.error('解析oss配置失败')
      }
    } else if (osConfigstr && typeof osConfigstr === 'object') {
      osConfig = osConfigstr;
    } else {
      message.error('获取oss配置失败')
    }
    console.log(7222, osConfig)
    const newclient = new OSS({
      region: 'oss-cn-hangzhou',
      bucket: 'ldk-react16-test-20200608',
      ...osConfig,
    });
    // console.log(55, newclient)
    client.current = newclient;
  }

  // 5.由于图片上传、视频上传项目中都是单独走的接口，需要一个上传的方法
  const myUploadFn = async (param) => {
    console.log('param---', param, client);
    let catalog = 'others/';// 上传目录
    const currentFile = param.file;
    if (currentFile.type && currentFile.type.includes('image/')) {
      catalog = 'imgs/';
    } else if (currentFile.type && currentFile.type.includes('video/')) {
      catalog = 'videos/';
    }

    try {
      const result = await client.current.put(catalog + currentFile.name, currentFile);
      console.log(444, result);
      // success需要一个有url属性的对象{url:'...'}
      const resss = {
        url: result.url,
        meta: {
          id: Math.random(),
          // title: 'upLoadObject && upLoadObject.fileName',
          alt: 'xxxx' + currentFile.name,
          // loop: false, // 指定音视频是否循环播放
          // autoPlay: false, // 指定音视频是否自动播放
          // controls: false, // 指定音视频是否显示控制栏
          // poster: '', // 指定视频播放器的封面
        },
      }
      param.progress(pro => {
        console.log(111, pro);
      })
      param.success(resss)
    } catch (e) {
      console.log(555, e);
      param.error({
        msg: '上传错误',
      })
    }

    // const serverURL = upload;// upload 是接口地址
    // const xhr = new XMLHttpRequest();
    // const fd = new FormData();

    // const successFn = (response) => {
    //   // 假设服务端直接返回文件上传后的地址
    //   // 上传成功后调用param.success并传入上传后的文件地址
    //   // console.log('response', response.currentTarget);
    //   // console.log('xhr.responseText', xhr.responseText);
    //   const upLoadObject = JSON.parse(response && response.currentTarget && response.currentTarget.response);
    //   param.success({
    //     url: JSON.parse(xhr.responseText).data.fileUrl,
    //     meta: {
    //       id: upLoadObject && upLoadObject.id,
    //       title: upLoadObject && upLoadObject.fileName,
    //       alt: upLoadObject && upLoadObject.fileName,
    //       loop: false, // 指定音视频是否循环播放
    //       autoPlay: false, // 指定音视频是否自动播放
    //       controls: false, // 指定音视频是否显示控制栏
    //       poster: '', // 指定视频播放器的封面
    //     },
    //   })
    // };

    // const progressFn = (event) => {
    //   // 上传进度发生变化时调用param.progress
    //   param.progress(event.loaded / event.total * 100)
    // };

    // const errorFn = (response) => {
    //   // 上传发生错误时调用param.error
    //   param.error({
    //     msg: 'unable to upload.',
    //   })
    // };

    // xhr.upload.addEventListener('progress', progressFn, false);
    // xhr.addEventListener('load', successFn, false);
    // xhr.addEventListener('error', errorFn, false);
    // xhr.addEventListener('abort', errorFn, false);

    // fd.append('file', param.file);
    // xhr.open('POST', serverURL, true);
    // xhr.setRequestHeader('X-Auth-Token', User.getToken());// header中token的设置
    // xhr.send(fd)
  };

  // 保存时
  const submitContent = (val) => {
    BraftEditorCallBackFn && BraftEditorCallBackFn(editorState.toHTML())
  }

  // this.state.editorState.isEmpty()//判断富文本编辑的内容是否为空
  // 清空富文本编辑器的内容
  //   this.setState({
  //     editorState: ContentUtils.clear(this.state.editorState)
  // })
  // }

  // 改变时
  const handleEditorChange = (editorState) => {
    // console.log(1555, editorState, editorState.toHTML())
    set_EditorState(editorState)
    BraftEditorCallBackFn && BraftEditorCallBackFn(editorState.toHTML())
  }

  //	设置如何将 event 的值转换成字段值--转换字段值
  const handleEditorChanges = (editorState) => {
    console.log('9999--',editorState);
    const htms = editorState.toHTML();
    if (!htms || htms === '<p></p>') {
      return undefined
    }
    return htms
  };
console.log('222222--',editorState);

  return (
    // <Form.Item
    //   className={itemClassName}
    //   getValueFromEvent={handleEditorChanges}
    //   name={itemKey}
    //   label={itemLabel}
    //   rules={itemRule}
    //   // key={draftKey}
    // >
    <BraftEditor
      // key={draftKey}
        controls={
          [

            'undo', 'redo', 'headings', 'separator',
            'font-size',
            // 'line-height', 'letter-spacing',
            'separator',
            'text-color',
            // 'bold',
            {
              key: 'bold', // 使用key来指定控件类型
              title: '加粗选中文字哦', // 自定义控件title
              // text: '点我加粗', // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
              text: <b>B</b>, // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
            },
            'italic', 'underline', 'strike-through', 'separator',
            // 'superscript', 'subscript',
            'remove-styles',
            //  'emoji', 'separator', 'text-indent',
            'text-align', 'separator',
            'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
            'link', 'separator', 'hr', 'separator',
            'media', 'separator',
            'clear'
          ]
        }
        value={editorState}
        className={'my_braft_editor ' + className || ''}
        placeholder={placeholder}
        media={{ uploadFn: myUploadFn, }}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    // </Form.Item>
  )
}
MangeImgs.propTypes = {
  itemKey: PropTypes.string,
  itemLabel: PropTypes.string,
  itemClassName: PropTypes.string,
  itemRule: PropTypes.array,

  className: PropTypes.string,
  placeholder: PropTypes.string,
  BraftEditorCallBackFn: PropTypes.func,
}
MangeImgs.defaultProps = {
  itemKey: 'remark',
  placeholder: '请输入正文内容',
};
export default MangeImgs
