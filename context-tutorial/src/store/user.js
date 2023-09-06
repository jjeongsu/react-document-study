import React, {createContext} from 'react';
export const context = createContext();

const UserStore = (props) => {
  
  const users = {
    name:'jade',
    job:'developer'
  }
  
  return (
    <context.Provider value={users}>{props.children}</context.Provider>
  )
};

export default UserStore;