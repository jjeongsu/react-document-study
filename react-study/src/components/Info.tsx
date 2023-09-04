import { useReducer, useState } from "react";
import useInputs from "../Hooks/useInputs";


const Info  = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  })
  const {name, nickname} = state;
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