import ColorContext, { ColorConsumer } from "../contexts/color"

const ColorBox = () => {
  return(
    <ColorConsumer>
      { ({state}) => (
        <div>
        <div 
          style = {{
            width: '64px',
            height: '64px',
            background : state.color,
          }}
          />
        <div 
          style = {{
            width: '64px',
            height: '64px',
            background : state.subcolor,
          }}
          />
        </div>
      )}
    </ColorConsumer>
  )
}

export default ColorBox;