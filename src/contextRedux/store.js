import React from 'react';
export const storeContext = React.createContext();
export const initialState = {
  userName: 'kiwis',
  age: 23,
}
export const reducer = (state, action) => {
  const { type, params, } = action;
  const newState = { ...state, }
  switch (type) {
    case 'change_userName':
      newState.userName = params
      return newState
    default:
      return initialState;
  }
}

