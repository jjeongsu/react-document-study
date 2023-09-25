import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter'
import Counter from '../components/Counter'

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 hook이다
  //state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }))

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
