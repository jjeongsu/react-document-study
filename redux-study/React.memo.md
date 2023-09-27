# React.memo와 useMemo의 차이점은 무엇일까?

이번주 스터디 주제인 redux로 todolist 만들기를 진행하면서 투두리스트의 각 아이템을 만드는 컴포넌트인 Todo 컴포넌트와, Todo컴포넌트들의 목록으로 이루어진 Todolist컴포넌트를 만들면서 React.memo로 최적화 하는 코드를 알게 되었다.

기존에 알고있던 useMemo와 이름이 참 비슷하게 생긴 이녀석은 무엇이고 어떨때 사용하는 걸까?

## memo

공식문서에서 설명하는 memo는 다음과 같다.

> `memo` let you skip re-rendering a component when its props are unchanged.

memo를 사용하게 되면 prop이 변하지 않는 한 컴포넌트는 리랜더링 되지 않는다. -> 즉 prop이 변할때, 컴포넌트를 리랜더링 시켜준다.

그리고 memo는 `Higher-Order Components(HOC)` 이다.

> HOC(고차컴포넌트)는 컴포넌트를 가져와서 새 컴포넌트를 반환하는 함수 이다.

> HOC는 컴포넌트 로직을 재사용하기 위한 REACT의 고급 기술로 React API의 일부가 아니며, REACT 의 구성적 특성에서 나오는 패턴입니다.

React.memo라는 고차 컴포넌트에 어떤 컴포넌트를 넣으면 UI, 기능적으로 같지만 좀더 최적화된 컴포넌트가 반환된다. 이렇게 최적화 된 컴포넌트는 랜더링이 되어야 할 상황에 놓일 때마다, PROP CHECK를 통해서 자신이 받는 props에 변화가 있는지 없는지 확인을 한 후에 props에 변화가 있을 경우 랜더링을 하고 props에 변화가 없을 경우 새로 랜더링을 하는것이 아니라 기존에 이미 랜더링이 된 내용을 재사용하게 된다.

React.memo를 사용하게 된다면 랜더링 횟수가 감소해 이득을 볼 수 있지만,랜더링된 결과가 메모리 어딘가에 저장되어야 함으로 메모리를 추가적으로 소비해야 함으로 무분별한 사용은 지양해야 할것이다.

### memo를 사용하기 적합한 상황

1. 컴포넌트가 같은 props로 자주 랜더링 될때
2. 컴포넌트가 랜더링 될 때마다 복잡한 로직을 처리해야 할 때

### 기억해야 할 것

React.memo는 오직 props에 대해서만 변경사항을 체크한다. 만약 React.memo에 감싸진 함수형 컴포넌트가 함수 내부에서 useState나 useContext, useReducer와 같은 상태에 관련된 훅을 사용한다면 props에 변화가 없더라도 state, context가 변할때 랜더링이 될것이다.
