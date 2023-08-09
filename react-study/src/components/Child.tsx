interface IChildProps {
  color: string,
  name ?: string,
}
//구조분해할당법으로 받아오기
export function Child({color, name ="my_name"} : IChildProps){

  return (
    <div style={{color: color}}>
      it's children component
      my name : {name}
    </div>
  )
}
