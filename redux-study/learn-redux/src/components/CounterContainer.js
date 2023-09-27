import { shallowEqual, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter'
import Counter from '../components/Counter'

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 hook이다
  //state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일

  /**
   * useSelector 훅을 통해 매번 랜더링 될 때마다 새로운 객체인 {number, diff}를 만들기 때문에
   * 상태가 바뀌었는지 아닌지 확인을 할 수 없어서 낭비 렌더링이 이루어진다.
   * 최적화 방법 1. useSelector를 여러번 사용해서 각각 호출한다.
   * 최적화 방법 2. shallowEqual 함수를 useSelector의 두번째 인자로 전달해 준다.
   */
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }))

  //방법1
  const number = useSelector(state => state.counter.number)
  const diff = useSelector(state => state.counter.diff)

  //방법2
  /**
   * useSelector의 두번째 파라미터는 equalityFn이다
   * 이전 값과 다음값을 비교하여 true가 나오면 리렌더링을 하지 않고 false가 나오면 리렌더링을 한다.
   * shallowEqual은 react-redux의 내장함수로 객체 안의 가장 겉의 있는 값을 모두 비교해 준다.
   */
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  )

  //useDispatch 는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게해주는 hook이다
  const dispatch = useDispatch()

  //각 액션들을 디스패치하는 함수들
  //increase, decrease, setDiff함수들은 액션을 생성해서 반환함
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())
  const onSetDiff = diff => dispatch(setDiff(diff))

  //Counter 컴포넌트에 상태와 , 액션을 디스패치 하는 함수들을 props로 넣어준다.
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer
