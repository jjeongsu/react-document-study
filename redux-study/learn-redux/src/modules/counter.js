// 1️⃣ 액션 타입 만들기
// Ducks 패턴을 따를땐, 액션의 이름에 접두사를 넣어주자
// 이렇게 해야 다른 모듈과 액션 이름이 중복되는 것을 방지할 수 있다
const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'coutner/INCREASE'
const DECREASE = 'counter/DECREASE'

// 2️⃣ 액션 생성함수 만들기
// 액션 생성 함수를 만들고 export 키워드를 사용해서 내보내기
export const setDiff = diff => ({ type: SET_DIFF, diff })
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// 초기상태 선언
const initialState = {
  number: 0,
  diff: 1,
}

//리듀서 선언
//리듀서는 export default 로 내보내주기
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
