import styled from 'styled-components';

export const TodoList = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export const TodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;
export const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  algin-items: center;
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;
export const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;
