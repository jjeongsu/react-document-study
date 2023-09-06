import React, {useState} from 'react';
import * as S from "../components/StupidAccordion.style"
export default function StupidAccordion(){
  const [isOpen, setIsOpen] = useState(false);
  
  return(
    <S.Wrapper>
      <S.HeaderWrapper onClick={()=>setIsOpen(!isOpen)}>
        I'm stupid Accordion
      </S.HeaderWrapper>
      <S.BodyWrapper isOpen={isOpen}>Body</S.BodyWrapper>
    </S.Wrapper>
  )
}