import styled from 'styled-components';

export const TodoInsert = styled.form`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-szie: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: grey;
  }
  display: flex;
  flex-direction: row;
`;
export const TodoInsertInput = styled.input`
  border: none;
  border-bottom: 2px solid #beb8eb;
  width: 400px;
`;
export const TodoInsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: #818aa3;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #beb8eb;
  }
`;
