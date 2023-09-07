import React from 'react';
import * as S from '../styles/TodoTemplate.style';
const TodoTemplate = ({ children }) => {
  return (
    <S.TodoTemplate>
      <S.TodoTemplateTitle>일정관리</S.TodoTemplateTitle>
      <S.TodoTemplateContent>{children}</S.TodoTemplateContent>
    </S.TodoTemplate>
  );
};
export default TodoTemplate;
