import React from 'react';
import { storeContext } from './store';
const Provider = (props) => {
  return (
    <storeContext.Provider value={props?.store}>
      {props?.children}
    </storeContext.Provider>
  )
}
export default Provider
