interface IChildProps {
  color: string,
  name ?: string,
  isSpecial ?: boolean,
}
//구조분해할당법으로 받아오기
export function Child({color, name ="my_name", isSpecial=false} : IChildProps){

  return (
    <div style={{color: color}}>
      {isSpecial &&  <>*</> }
      my name : {name}
    </div>
  )
}
