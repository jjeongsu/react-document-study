# Redux middleware

리덕스를 공부하면서 들었던 한가지 의문점은 그래서 왜? 굳이 리덕스를 써야할까이다.
상태를 관리하기 위해서는 contextAPI나 recoil처럼 좀더 가볍고 사용이 쉬운 방법도 있는데, redux는 추가적으로 라이브러리를 설치해야 하고, 러닝커브도 비교적 낮지 않기 때문이다.

이번에는 리덕스의 미들웨어인 redux-thunk, redux-saga를 배워보면서 리덕스가 가진 핵심 기능이 무엇인지 한번 알아보자.

## Redux-middleware는 어떤 기능을 하는가?

액션 => 미들웨어 => 리듀서 => 스토어

리덕스 미들웨어를 사용하면 액션이 디스패치 된 다음, 리듀서에서 해당 액션을 바당와서 업데이트하기 전에 추가적인 작업을 할 수 있다.

- 특정 조건에 따라 액션이 무시되게 만들 수 있다.
- 액션을 콘솔에 출력하거나, 서버쪽에 로깅을 할 수 있다.
- 액션이 디스패치 되었을 때, 이를 수정해서 리듀서에 전달되도록 할 수 있다.
- 특정 액션이 발생 했을 때, 이에 기반하여 다른 액션이 발생되도록 할 수 있다.
- 특정 액션이 발생 했을 때, 특정 자바스크립트 함수를 실행시킬 수 있다.

## 미들웨어 만들어 보며 이해하기

### 준비

increase, decrease의 기본적인 기능이 있는 counter 예졔를 만들어 보았다.
이 예제 에서는 액션타입, 액션 생성함수, 리듀서를 한파일에 작성하는 DUCKS 패턴을 따른다.

UI는 Counter 컴포넌트에 담겨있고 조작에 필요한 상태와 변수는 부모인 CounterContainer컴포넌트에 담겨 props로 전달된다.

<b>modules/counter.js</b>

```
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
```

<b>components/Counter.js</b>

```
function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}> +1</button>
      <button onClick={onDecrease}> -1</button>
    </div>
  )
}
```

<b>components/CounterContainer.js</b>

```
function CounterContainer() {
  const number = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const onIncrease = () => {
    dispatch(increase())
  }

  const onDecrease = () => {
    dispatch(decrease())
  }

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

```

### 리덕스 미들웨어 템플릿

(템플릿)[https://redux.js.org/tutorials/fundamentals/part-4-store#middleware]

리덕스 미들웨웨어를 만들때는 템플릿을 사용한다.
( 함수를 연달아서 두번 리턴하는 함수.. 매우 요상하다. )

```
const middleware = store => text => action => {
  // do something ...
}

//function 키워드를 사용하여 작성하면 다음과 같다..

function middleware(store){
  return function (next) {
    return function (action) {
      // do something
    }
  }
}

```

각 함수에서 받아오는 파라미터는 어떤것을 의미할까 ?

1. `store` : 리덕스 스토어 인스턴스 이다. 이 안에느 dispatch, getState, subscribe 와 같은 내장함수가 들어 있다.
   //store.getState, store.dispatch 이렇게 사용하나?
   //{ getState , dispatch} = state 이렇게?

2. `next` : 액션을 다음 미들웨어어 전달하는 함수. next(action) 이렇게 사용한다. 만약 그 다음에 미들웨어가 없다면 리듀서에게 액션을 전달해준다.-> next를 호출하지 않는다면, 액션이 무시처리되어 리듀서에게로 전달되지 않는다.

3. `action` : 현재 처리하고 있는 액션 개체이다.

리덕스 스토어에는 여러개의 미들웨어를 등록 할 수 있다. 새로운 액션이 디스패치되면, 첫번째로 등록한 미들웨어(1)가 호출된다. 만약 미들웨어에서 next(action)을 호출하면 다음 미들웨어(2)로 액션이 넘어간다. 만약 미들웨어에서 store.dispatch를 사용하면 다른 액션을 추가적으로 발생시킬 수 있다.
