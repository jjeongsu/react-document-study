/**
 * 액션타입, 액션 생성함수, 리듀서를 한파일에 작성하는 DUCKS 패턴을 따른다.
 * 액션이름이 중복되지 않으므로 접두어를 생략한다
 */

//액션타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

//액션 생성 함수
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

//초깃값
const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    default:
      return state
  }
}
