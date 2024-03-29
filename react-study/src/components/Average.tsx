import { SetStateAction, useCallback, useMemo, useState } from "react";

const getAverage = (numbers : any) => {
  console.log('평균값 계산중');
  if(numbers.length === 0 ) return 0;
  const sum = numbers.reduce((a:any,b:any) => a+b );
  return sum/numbers.length;
}

const Average = () =>{
  const [list, setList] = useState<number []>([]);
  const [number, setNumber] = useState('');

  const onChange 
  = useCallback( (e:any) => {setNumber(e.target.value)}, []);
  //컴포넌트가 처음 랜더링 될 때만 함수생성

  const onInsert = useCallback( () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]); //number 혹은 list가 바뀌었을때만 함수 생성
  
  
  console.log('average 컴포넌트 랜더링');

  const avg = useMemo(() => getAverage(list), [list]);

  
  return(
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  )
}

export default Average;