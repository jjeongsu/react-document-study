function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10))
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

//프레젠테이셔널 컴포넌트에선 주로 UI를 선언하는것에 집중하며, 필요한 값이나 함수는 props로 받아와서 사용하는 형태로 구현

export default Counter
