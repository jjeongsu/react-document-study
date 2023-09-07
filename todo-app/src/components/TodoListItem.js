import React from 'react';
import * as S from '../styles/TodoList.style';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <S.TodoListItem>
      <S.Checkbox>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text"> {text} </div>
      </S.Checkbox>
      <S.Remove>
        <MdRemoveCircleOutline />
      </S.Remove>
    </S.TodoListItem>
  );
};
export default TodoListItem;
