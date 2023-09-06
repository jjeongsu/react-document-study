import styled from 'styled-components'

export const BodyWrapper = styled.div`
  height : 60px;
  padding: 10px;
  border: 1px solid #0066ff;
  color: black;
  display: ${({isOpen}) => (isOpen? "block" : "none")};
  `;

export const HeaderWrapper = styled.div`
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #0066ff;
`

export const Wrapper = styled.div`
  margin: 20px;
  width: 600px;
  color: white;
`
