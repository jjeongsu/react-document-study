import React, { useState, useCallback } from 'react';
import * as S from '../styles/TodoInsert.style';
import Speech from './Speech';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <S.TodoInsert onSubmit={onSubmit}>
      <S.TodoInsertInput
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <S.TodoInsertButton type="submit">+</S.TodoInsertButton>
      <Speech />
    </S.TodoInsert>
  );
};
export default TodoInsert;
