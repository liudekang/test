import React from 'react';
import Loadable from 'react-loadable';
import { Button } from 'antd'
import LoadingPage from 'Page/loadingPage';

const asyncLoader = (fn) => {
  return Loadable({
    loader: fn,
    loading: ToastTrue,
    delay: 500,
    timeout: 60000,
  });
};

function ToastTrue(props) {
  //   {
  //     error: null
  //     isLoading: true
  //     pastDelay: false
  //     retry: ƒ ()
  //     timedOut: false
  //   }
  // 当你需要loader的组件加载失败的时候，你的Loading组件将会接收到一个Error对象（如果成功了将会接收到一个null）
  if (props.error) {
    return <div>Error! <Button onclick={ props.retry }>Retry</Button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <Button onClick={ props.retry }>Retry</Button></div>;
  } else if (props.pastDelay) {
    return <LoadingPage />;
  } else {
    return null;
  }
}

export default asyncLoader;
