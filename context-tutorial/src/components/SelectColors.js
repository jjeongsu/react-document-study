//Context의 Actions에 넣어 준 함수를 호출하는 컴포넌트
//마우스 왼쪽버튼 => 큰 정사각형 색상 변경,

import { ColorConsumer } from "../store/color";

//마우스 오른쪽버튼 => 작은 정사각형 색상 변경
const colors = ['red', 'orange','yellow','green','blue', 'indigo', 'violet'];

const SelectColors = () => {
  return(
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
      {({actions}) => (<div style={{display:'flex'}}>
        {colors.map(color => (
          <div
          key={color}
          style={{
            background: color,
            width: '24px',
            height: '24px',
            cursor:'pointer'
          }}
          onClick={() => {actions.setColor(color) }}
          onContextMenu={e => {
            e.preventDefault(); //오른쪽버튼 클릭시 메뉴가 뜨는것을 무시
            actions.setSubcolor(color);
          }}
          ></div>
          ))}
      </div>)}
      </ColorConsumer>
    </div>
  )
}
export default SelectColors;