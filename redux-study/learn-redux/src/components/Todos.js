import React, { useState } from 'react'

//컴포넌트 최적화를 위해 REACT.memeo를 사용
const TodoItem = React.memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [text, setText] = useState(todo.text)
  const onSubmit = e => {
    e.preventDefault()
    onUpdate(todo.id, text)
    setIsUpdate(false)
  }
  const handleUpdateClick = () => {
    setIsUpdate(true)
  }
  return (
    <>
      {isUpdate ? (
        <input
          placeholder={todo.text}
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
      ) : (
        <li
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          onClick={() => {
            onToggle(todo.id)
          }}
        >
          {todo.text}
        </li>
      )}

      <button
        onClick={() => {
          onDelete(todo.id)
        }}
      >
        삭제
      </button>
      {isUpdate ? (
        <button onClick={onSubmit}>완료</button>
      ) : (
        <button onClick={handleUpdateClick}> 수정 </button>
      )}
    </>
  )
})

const TodoList = React.memo(function TodoList({
  todos,
  onToggle,
  onDelete,
  onUpdate,
}) {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )
      })}
    </ul>
  )
})

function Todos({ todos, onCreate, onToggle, onDelete, onUpdate }) {
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    onCreate(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할일을 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  )
}

export default Todos
