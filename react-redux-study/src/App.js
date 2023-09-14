import './style.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch, connect } from 'react-redux'
//connect : 재사용성을 위해 필요
//Provider: state을 사용할 컴포넌트들을 감싸기
function reducer(state, action) {
  const newState = { ...state }
  if (state === undefined) {
    return {
      number: 1,
    }
  }
  if (action.type === 'PLUS') {
    newState.number++
  }

  return newState
}
const store = createStore(reducer)

export default function App() {
  return (
    <div id="container">
      <h1>Root : </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  )
}
function Left1(props) {
  console.log(1)
  const number = useSelector(state => state.number)
  return (
    <div>
      <h1>Left1 :{number} </h1>
      <Left2></Left2>
    </div>
  )
}
function Left2(props) {
  console.log(2)
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  )
}
function Left3(props) {
  console.log(3)
  function f(state) {
    return state.number
  }
  //const number = useSelector(f)
  const number = useSelector(state => state.number)
  return (
    <div>
      <h1>Left3 :{number}</h1>
    </div>
  )
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}
function Right3(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' }) //reducer가 호출됨
        }}
      ></input>
    </div>
  )
}
