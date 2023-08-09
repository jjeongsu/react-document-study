import { Child } from "./components/Child"
import { Wrapper } from "./components/Wrapper";
function App() {

  const name = "Jade LEE";
  return (
    <Wrapper>
      <Child name={name} color="red"/>
      <Child color="pink" />
    </Wrapper>
  )
}

export default App
