
import { ColorProvider } from "./color";
import SelectColors from "../src/components/SelectColors";
import ColorBox from "../src/components/ColorBox";
function App() {
  console.log('App 컴포넌트 랜더링');
  return (
    <ColorProvider>
      <SelectColors />
      <ColorBox />
    </ColorProvider>
  )
}
export default App

