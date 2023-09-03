import { Child } from "./components/Child"
import Counter from "./components/Counter";
import Info from "./components/Info";
import { Wrapper } from "./components/Wrapper";
function App() {
  const name = "Jade LEE";

  console.log('App 컴포넌트 랜더링');
  return (
    <Wrapper>
      <Counter />
      <Info />
    </Wrapper>
  )
}

export default App
