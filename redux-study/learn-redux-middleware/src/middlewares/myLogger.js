const myLogger = store => next => action => {
  console.log(action) //먼저 액션을 출력하고
  const result = next(action) //그다음의 미들웨어/리듀서 에게 액션을 전달

  //업데이트 이후의 상태를 조회
  console.log('\t', store.getState())

  return result //반환값은 dispatch의 결과물된다.
}

export default myLogger
