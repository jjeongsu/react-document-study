//액션 타입을 선언한다
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO' //투두 <-> done 상태 바꿈
const DELETE_TODO = 'todos/DELETE_TODO'
const UPDATE_TODO = 'todos/UPDATE_TODO' //수정하기

//액션 생성함수 선언
let nextId = 1
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
})
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
})

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  text,
  id,
})

//초기상태 선언
//리듀서의 초기상태는 꼭 객체타입일 필요는 없다
//배열 혹은 원시타입(숫자, 문자, boolean,)이여도 상관이 없다
const initialState = [
  //이렇게 생긴 객체를 이 배열안에 넣을 것이다.
  /*
  {
    id: 1,
    text:'example',
    done: false
  }
  */
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case DELETE_TODO:
      const targetIndex = state.findIndex(todo => todo.id === action.id)
      return [...state.slice(0, targetIndex), ...state.slice(targetIndex + 1)]
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      )
    default:
      return state
  }
}
