import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  console.log('Counter 컴포넌트 랜더링')
  return (
    <div>
      <p>현재 카운터의 값은 {value} 입니다.</p>
      <button onClick={() => {setValue(prev => prev+1)}}>+1</button>
      <button onClick={() => {setValue(prev => prev-1)}}>-1</button>
    </div>
  )
}

export default Counter;