import { useReducer, useState } from "react";

interface actionType {
  type : string;
}
interface stateType {
  value: number;
}
function reducer(state:stateType, action: actionType){
  //action, type에 따라 새로운 상태를 반환해줌
  console.log(typeof(action));
  console.log(state);
  switch(action.type){
    case 'INCREMENT':
      return {value : state.value +1}
    case 'DECREMENT':
      return {value : state.value -1}
    default:
      return state
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0});
  //state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수
  //dispatch(action) 형태로 함수안에 파라미터로 액션값을 넣어주면 -> 리듀서 함수 호출

  console.log('Counter 컴포넌트 랜더링')
  return (
    <div>
      <p>현재 카운터의 값은 {state.value} 입니다.</p>
      <button onClick={() => {dispatch({type : "INCREMENT"})}}>+1</button>
      <button onClick={() => {dispatch({type : 'DECREMENT'})}}>-1</button>
    </div>
  )
}

export default Counter;