import ColorContext, { ColorConsumer } from "../store/color"
import { useContext } from "react";
const ColorBox = () => {
  const {state} = useContext(ColorContext);
  return(
    <>
        <div 
          style = {{
            width: '64px',
            height: '64px',
            background : state.color,
          }}
          ></div>
        <div 
          style = {{
            width: '64px',
            height: '64px',
            background : state.subcolor,
          }}
          ></div>
      
  </>)
}
export default ColorBox;