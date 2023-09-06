import {SmartAccordion, SmartAccordionHeader, SmartAccordionBody} from "./SmartAccordion";
import StupidAccordion from "./StupidAccordion";
import styled from 'styled-components';
export default function AccorianExample(){
  return(
    <>
      <h2>ContextAPI를 이용한 재사용성있는 컴포넌트 만들기</h2>
      <StupidAccordion />

      <SmartAccordion>
        <SmartAccordionHeader>I'm smart Accordion</SmartAccordionHeader>
        <SmartAccordionBody>BBody</SmartAccordionBody>
      </SmartAccordion>

      <SmartAccordion>
        <StyledSmartAccordionHeader>I'm smart Accordion but diff color</StyledSmartAccordionHeader>
        <StyledSmartAccordionBody>BBody</StyledSmartAccordionBody>
      </SmartAccordion>
    </>
  );
}

const StyledSmartAccordionHeader = styled(SmartAccordionHeader)`
  background-color: green;
`;

const StyledSmartAccordionBody = styled(SmartAccordionBody)`
  border: 1px solid green;
`