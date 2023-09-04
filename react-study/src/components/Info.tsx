import { useReducer, useState } from "react";

const reducer = (state: any, action: any) => {
  return {
    ...state, 
    [action.name]: action.value,
  }
}

const Info  = () => {
  const [state, dispatch] = useReducer(reducer, {name:"", nickname:''});
  const {name, nickname} = state;
  const onChange = (e:any) => {dispatch(e.target)}
  console.log('info 컴포넌트 랜더링');
  return (
    <div>
      <input onChange={onChange} value={name} name="name"/>
      <input onChange={onChange} value={nickname} name="nickname"/>

    <p>이름 : {name}</p>
    <p>닉네임 : {nickname}</p>
    </div>
  )
}
export default Info;