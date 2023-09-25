import { createStore } from 'redux'

//리덕스에서 관리한 상태를 정의 한다.
const initialState = {
  counter: 0,
  text: '',
  list: [],
}

//액션타입을 정의한다.
//액션의 타입은 주로 대분자로 작성한다
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE = 'CHANGE'
const ADD = 'ADD'

//액션 생성함수를 정의한다
//액션 생성함수는 주로 camelCase로 작성
function increase() {
  return {
    type: INCREASE, //액션객체에는 type값이 필수로 작성되어야 한다
  }
}

function decrease() {
  return {
    type: DECREASE,
  }
}

function changeText(text) {
  return {
    type: CHANGE,
    text, //action안에는 type외에 추가적인 필드를 마음대로 넣을 수 있다.
  }
}

function add(item) {
  return {
    type: ADD,
    item,
  }
}

function reducer(state = initialState, action) {
  //state의 초깃값 지정

  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case CHANGE:
      return {
        ...state,
        text: action.text,
      }
    case ADD:
      return {
        ...state,
        list: state.list.concat(action.item),
      }
    default:
      return state
  }
}

//스토어 만들기
const store = createStore(reducer)

console.log(store.getState()) //현재 스토어안의 상태를 가져옴

//스토어 안에 있는 상태가 바뀔 때마다 호출되는 listener함수
const listener = () => {
  const state = store.getState()
  console.log('state', state)
}

//구독을 해제 하고 싶을 때는 unsubscribe()를 호출한다.
const unsubscribe = store.subscribe(listener)

//액션을 디스패치 해보자
store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('hello'))
store.dispatch(add({ id: 1, text: 'wow' }))
