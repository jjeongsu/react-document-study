import { useMemo, useState } from "react";

const getAverage = (numbers : any) => {
  console.log('평균값 계산중');
  if(numbers.length === 0 ) return 0;
  const sum = numbers.reduce((a:any,b:any) => a+b );
  return sum/numbers.length;
}

const Average = () =>{
  const [list, setList] = useState<number []>([]);
  const [number, setNumber] = useState('');

  const onChange = (e:any) => {
    setNumber(e.target.value);
  }
  const onInsert = (e: any) => {
    let paresed = parseInt(number);
    const nextList = list.concat(paresed);
    setList(nextList);
    setNumber('');
  }
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