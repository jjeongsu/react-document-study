
import { ColorProvider } from "./store/color";
import SelectColors from "../src/components/SelectColors";
import ColorBox from "../src/components/ColorBox";
import UserStore from "./store/user";
import About from "./components/About"
import Profile from "./components/Profile"
import AccordianExample from "./components/AccordianExample"
function App() {
  console.log('App 컴포넌트 랜더링');
  return (
    <UserStore>
      <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider>
      
      <About />
      <Profile />

      <AccordianExample />
    </UserStore>
  )
}
export default App

