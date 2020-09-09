/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:26
 */
import React, { useEffect, useState } from 'react';
import service from 'Src/utils/request';
import { Button, message } from 'antd';
import OSS from 'ali-oss';
import styles from './index.css';

const MangeImgs = () => {
  const [client, set_client] = useState()
  useEffect(() => {
    const osConfigstr = localStorage.getItem('os-hang-zhou-config');
    if (osConfigstr) {
      createClintFn(osConfigstr)
    } else {
      const query = window.Bmob.Query('api_config');
      query.get('rCad333D').then(res => {
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

  const createClintFn = (osConfigstr) => {
    let osConfig = {};
    if (typeof osConfigstr === 'string') {
      try {
        osConfig = JSON.parse(osConfigstr);
      } catch (error) {
        message.error('解析oss配置失败')
      }
    } else if (osConfigstr && typeof osConfigstr === 'object') {
      osConfig = osConfigstr;
    } else {
      message.error('获取oss配置失败')
    }

    const newclient = new OSS({
      region: 'oss-cn-hangzhou',
      bucket: 'ldk-react16-test-20200608',
      ...osConfig,
    });
    set_client(newclient)
  }

  const submitFn = () => {
    // service.get('/api/users')
    //   .then(res => {
    //     console.log(11, res)
    //   })
    async function listBuckets() {
      try {
        const result = await client.list({
          // 'max-keys': 3,
        });
        // const result = await client.put('object-name.txt', new Buffer('hello world'));// client.list();
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }

    listBuckets();
  }

  const iptChange = async(ev) => {
    const files = ev.target.files;

    if (files && files.length > 0) {
      const file = files[0]
      var reader = new FileReader();
      console.log(222, files, file, reader)
    }
    const forms = new FormData()

    forms.append('file', files[0])// new Buffer('hello world')

    try {
      const result = await client.put('imgs/' + files[0].name, files[0]);
      console.log(444, result);
    } catch (e) {
      console.log(555, e);
    }
  }

  return (
    <div className='App'>
      <h6>上传图片</h6>
      <div>
        <input type='file' name='xxx' id='' onChange={iptChange} />

        <Button onClick={submitFn}>提交</Button>
        <hr />
        <img src='https://ldk-react16-test-20200608.oss-cn-hangzhou.aliyuncs.com/imgs/Live2D.png' alt='www' srcSet='' />
      //https://ldk-react16-test-20200608.oss-cn-hangzhou.aliyuncs.com/
      </div>
    </div>
  )
}

export default MangeImgs
