
import { createContext, useContext, useState } from "react"
import * as S from  "../components/StupidAccordion.style"

const AccordionContext = createContext();
const useAccordionContext = () => useContext(AccordionContext);


export  function SmartAccordion({children}){
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen
  }

  return(
    <>
      <AccordionContext.Provider value = {value}>
        <S.Wrapper>{children}</S.Wrapper>
      </AccordionContext.Provider>
    </>
  )
};

export  function SmartAccordionHeader (props)  {
  const {isOpen, setIsOpen} = useAccordionContext();
  return (
    <S.HeaderWrapper 
      onClick = {() => setIsOpen(!isOpen)}
      className = {props.className}
      >
      {props.children}
    </S.HeaderWrapper>
  )
};


export  function SmartAccordionBody (props) {
  const {isOpen} = useAccordionContext();

  return(
    <S.BodyWrapper 
      isOpen = {isOpen}
      className = {props.className}
      >
      {props.children}
    </S.BodyWrapper>
  )
}




