/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Button } from 'antd'

import styles from './index.css';
import './index.less';
const TopNav = (props) => {
  const { width, height, padding, } = props;
  const [isLogin, set_isLogin] = useState(false)
  useEffect(() => {
    // const current = window.Bmob ? window.Bmob.User.current() : null;
    // if (current && typeof current === 'object') {
    //   window.user = current
    //   set_user(current)
    //   set_isLogin(true)
    // }

    const resTimer = loginOutFn()
    console.log('222222===', props, resTimer)
    return () => {
      clearInterval(resTimer)
    }
  }, [])

  const loginOutFn = () => {
    change();
    return setInterval(function() {
      change();
    }, 1000);

    function change() {
      var c = document.querySelector('canvas');
      var ctx = c.getContext('2d');
      var deg = Math.PI / 180;
      var times = new Date();
      var h = times.getHours();
      var m = times.getMinutes();
      var s = times.getSeconds();
      const get_width = width
      const get_height = height
      const get_padding = padding

      ctx.save();
      // 清空画布
      ctx.clearRect(0, 0, get_width, get_height);
      ctx.translate(get_width / 2, get_height / 2);

      // x轴，y轴
      // lines(-270, 0, 270, 0, 1, 'black');
      // lines(270, 0, 258, -3, 1, 'black');
      // lines(270, 0, 258, 3, 1, 'black');

      // lines(0, -270, 0, 270, 1, 'black');
      // lines(0, -270, -3, -258, 1, 'black');
      // lines(0, -270, 3, -258, 1, 'black');
      // 160
      // 205  140
      // 180 120
      // 150 90
      const clock_over_width = get_width / 2 - get_padding;
      const clock_inner_width = clock_over_width - 20;
      const clock_txt_width = clock_inner_width - 20;

      const clock_fen_width = clock_txt_width +15;
      const clock_miao_width = clock_over_width - 10;
      const clock_shi_width = clock_fen_width - 25;

      // const clock_plot_shi = clock_fen_width - 10;

      // 表盘外圈
      s_arcs(0, 0, clock_over_width, 10, 'black');
      // 表盘内圈细线
      s_arcs(0, 0, clock_inner_width, 1, 'black');

      s_arcs(0, 0, clock_over_width * 0.1, 1, 'black');

      // 表盘小点——灰色分钟
      for (var i = 0; i < 60; i++) {
        ctx.rotate(6 * deg);
        f_arcs(0, -clock_inner_width, 3, '#ccc');
      }
      // 表盘小点——黑色小时 和数字
      for (var i = 1; i <= 12; i++) {
        ctx.save();
        ctx.rotate(i * 30 * deg);
        f_arcs(0, -clock_inner_width, 5, 'black');

        var x = clock_txt_width * Math.sin(i * 30 * deg);
        var y = -clock_txt_width * Math.cos(i * 30 * deg);
        ctx.restore();
        texts(i, x, y, 'black');
      }
      // 文字跟着旋转，不是正的
      // for (var i = 0; i < 12; i++) {
      //     ctx.rotate(30 * deg);
      //     f_arcs(0, -clock_inner_width, 7, "black");
      //     texts(i + 1, 0, -150, "black");
      // };

      // 时分秒的指针
      h = h < 12 ? h : h - 12;
      var h_deg = (h + m / 60) * 30 * deg;
      var m_deg = (m + s / 60) * 6 * deg;
      var s_deg = s * 6 * deg;
      // 115 100
      ctx.save();
      ctx.rotate(m_deg);
      ctx.lineCap = 'round';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'black';
      lines(0, clock_fen_width * 0.3, 0, -clock_fen_width, 3, 'black');

      ctx.restore();
      ctx.save();
      ctx.rotate(h_deg);
      ctx.lineCap = 'round';
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'black';
      lines(0, clock_shi_width * 0.3, 0, -clock_shi_width, 10, 'black');

      ctx.restore();
      ctx.save();
      ctx.rotate(s_deg);
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'black';
      lines(0, clock_miao_width * 0.3, 0, -clock_miao_width, 1, 'red');
      f_arcs(0, 0, 5, 'red');
      ctx.restore();

      ctx.restore();

      // 封装的绘制描边圆的函数
      function s_arcs(x, y, r, width, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(x, y, r, 0, 360 * deg);
        ctx.stroke();
      }
      // 封装的绘制填充圆的函数
      function f_arcs(x, y, r, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, 360 * deg);
        ctx.fill();
      }

      // 封装的绘制线的函数
      function lines(x0, y0, x1, y1, width, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
      // 封装的绘制文字的函数
      function texts(text, x, y, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.font = '23px Microsoft Yahei';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
      }
    }
  }

  return (
    <div className='xxxx'>
      <canvas width='320' height='320'></canvas>
    </div>

  )
}
TopNav.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
}
TopNav.defaultProps = {
  height: 320,
  width: 320,
  padding: 40,
}

export default TopNav
