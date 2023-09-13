import { useState, createContext, useContext } from 'react'
const InputContext = createContext({
  id: '',
  value: '',
  type: 'text',
  onChange: () => {},
})
//context API를 통해서 컴포넌트 내부에서 공유될 상태(데이터)를 정의한다.

const InputWrapper = ({ id, value, type, onChange, children }) => {
  const contextValue = { id, value, type, onChange }
  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  )
}
//부모 컴포넌트를 생성하여 위의 contextAPI를 공유한다.

const Input = ({ ...props }) => {
  const { id, value, type, onChange } = useContext(InputContext)
  return (
    <input id={id} value={value} type={type} onChange={onChange} {...props} />
  )
}
const Label = ({ children, ...props }) => {
  const { id } = useContext(InputContext)
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  )
}
//자식 컴포넌트들을 만든다. 이때 자식 컴포넌트 들은 contextAPI를 통해 필요한 상태를 공유받는다.
InputWrapper.Input = Input
InputWrapper.Label = Label
//(선택) 자식 컴포넌트들을 부모 컴포넌트의 프로퍼티로 등록한다.

const SomeInput = () => {
  const { value: name, onChange: onChangeName } = useInput()

  return (
    <div className="input-container">
      <label htmlFor="1">NAME</label>
      <input id="1" type="text" value={name} onChange={onChangeName} />
    </div>
  )
}

//APP.js에서 사용시
function App() {
  return (
    <div>
      <InputHeadless>
        {({ value, onChange }) => {
          return (
            <div className="input-container">
              <label htmlFor="1">NAME</label>
              <input id="1" type="text" value={value} onChange={onChange} />
            </div>
          )
        }}
      </InputHeadless>
    </div>
  )
}

const InputHeadless = ({ children }) => {
  const [value, setValue] = useState('')

  const handleChangeValue = event => {
    setValue(event.target.value)
  }

  return children({
    value,
    onChange: handleChangeValue,
  })
}
export default InputHeadless
