import TodoListItem from './TodoListItem';
import * as S from '../styles/TodoList.style';
const TodoList = ({ todos }) => {
  return (
    <S.TodoList>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </S.TodoList>
  );
};
export default TodoList;
