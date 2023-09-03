import { useState } from "react";

const Info  = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e:any) => {
    setName(e.target.value);
  }
  
  const onChangeNickname = (e:any) => {
    setNickname(e.target.value);
  }
  console.log('info 컴포넌트 랜더링');
  return (
    <div>
      <input onChange={onChangeName} value={name}/>
      <input onChange={onChangeNickname} value={nickname} />

    <p>이름 : {name}</p>
    <p>닉네임 : {nickname}</p>
    </div>
  )
}
export default Info;