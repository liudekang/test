
/**
 * 传入时间返回与当前时间（或者传入时间）的差值
 * @param {oldtime}   传入时间
 * @param {diffTime}   对比的时间，默认是当前
 * @param {resMode}  返回结果形式 arr 纯数字的数组 max 最大那个时间差
 * @back  默认是 时间差组成得到数值
 */

const TimeDiffFromNowArr = (oldtime, diffTime, resMode) => {
  const oldTime = new Date(oldtime).valueOf();
  const diffTimes = new Date(diffTime).valueOf();
  if (!oldtime || !oldTime) {
    return null
  }
  const nowTime = diffTimes || Date.now();
  const s_all = Math.round((nowTime - oldTime) / 1000);
  const resStrs = [];
  const res = [];

  const s = s_all % 60;
  let czt = Math.floor(s_all / 60);
  res.unshift(s);
  resStrs.unshift(s + '秒');
  resStrs

  let m = 0;
  if (czt) {
    m = czt % 60;
    czt = Math.floor(czt / 60);
    res.unshift(m);
    resStrs.unshift(m + '分钟');
  }

  let h = 0;
  if (czt) {
    h = czt % 24;
    czt = Math.floor(czt / 24);
    res.unshift(h);
    resStrs.unshift(h + '小时');
  }

  let d = 0;
  if (czt) {
    d = czt % 24;
    czt = Math.floor(czt / 24);
    res.unshift(d);
    resStrs.unshift(d + '天');
  }
  let mh = 0;
  if (czt) {
    mh = czt % 30;
    czt = Math.floor(czt / 30);
    res.unshift(mh)
    res.unshift(mh + '月');
  }
  let y = 0;
  if (czt) {
    y = czt;
    res.unshift(y);
    resStrs.unshift(y + '年');
  }
  if (resMode === 'arr') {
    return res
  } else if (resMode === 'max') {
    return resStrs[0]
  }
  return resStrs
}

export {
  TimeDiffFromNowArr
}