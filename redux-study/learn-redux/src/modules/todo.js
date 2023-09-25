/*
1. 액션 타입 선언
  - 기능을 생각해 보기
    - 새로운 투두를 만드는 add_todo
    - 투두를 던으로 만드는 toggle_todo
2. 액션 생성 함수 만들기
3. initial state 만들기
4. reducer만들기
*/

//1. 액션 타입 선언하기
const ADD_TODO = 'todos/add_todo'
const TOGGLE_TODO = 'todos/togle_todo'

//2. 액션 생성함수 만들기
let newId = 1
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

//3. initial state 만들기
const initialState = [
  /**
   * 이런 형태의 객체를 넣을 것이다.
   * {
   *  id: 1,
   * text:'example'
   * done:false
   * }
   */
]

//4. reducer 만들기
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    default:
      return state
  }
}
