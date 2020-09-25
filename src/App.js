import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <StyledBody>
      <StyledWrapper>
        <StyledCalcTop>

        </StyledCalcTop>
        <StyledCalcBottom>

        </StyledCalcBottom>
      </StyledWrapper>
    </StyledBody>
  );
}

const StyledBody = styled.div`
   background-color: lightblue;
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const StyledWrapper = styled.div`
   width: 290px;
   height: 400px;
   border-radius: 15px;
`;
const StyledCalcTop = styled.div`
   width: 100%;
   height: 20%;
   background-color: rgb(29, 175, 235);
   border-radius: 15px 15px 0px 0px;
`;
const StyledCalcBottom = styled.div`
   width: 100%;
   height: 70%;
   background-color: rgb(255, 255, 255);
   border-radius: 0px 0px 15px 15px;
`;



export default App;
