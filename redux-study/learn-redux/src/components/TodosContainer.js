import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from '../components/Todos'
import { addTodo, toggleTodo, deleteTodo, updateTodo } from '../modules/todos'

function TodosContainer() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const onCreate = text => dispatch(addTodo(text))
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch])
  const onDelete = useCallback(id => dispatch(deleteTodo(id)), [dispatch])
  const onUpdate = useCallback(
    (id, text) => dispatch(updateTodo(id, text)),
    [dispatch]
  )
  console.log('todos', todos)
  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onToggle={onToggle}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  )
}

export default TodosContainer
