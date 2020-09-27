import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import AddButton from './components/AddButton';
import ClearButton from './components/ClearButton';
import './App.css';

function App() {
  return (
    <StyledBody>
      <StyledWrapper>
        <StyledCalcTop>

        </StyledCalcTop>
        <StyledCalcBottom>
          <StyledBtnCont>
            <StyledTopHozRow>
              <ClearButton>Clear</ClearButton>
              <Button>/</Button>
            </StyledTopHozRow>
            <StyledBottomCont>
              <StyledVertRow>
                <Button>7</Button>
                <Button>4</Button>
                <Button>1</Button>
                <Button>.</Button>
              </StyledVertRow>
              <StyledVertRow>
                <Button>8</Button>
                <Button>5</Button>
                <Button>2</Button>
                <Button>0</Button>
              </StyledVertRow>
              <StyledVertRow>
                <Button>9</Button>
                <Button>6</Button>
                <Button>3</Button>
                <Button>=</Button>
              </StyledVertRow>
              <StyledVertRow>
                <Button>*</Button>
                <Button>-</Button>
                <AddButton>+</AddButton>
              </StyledVertRow>
            </StyledBottomCont>
          </StyledBtnCont>
        </StyledCalcBottom>
      </StyledWrapper>
    </StyledBody >
  );
}

export default App;

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
   height: 375px;
   border-radius: 15px;
`;
const StyledCalcTop = styled.div`
   width: 100%;
   height: 27%;
   background-color: rgb(29, 175, 235);
   border-radius: 15px 15px 0px 0px;
`;
const StyledCalcBottom = styled.div`
   width: 100%;
   height: 73%;
   background-color: rgb(255, 255, 255);
   border-radius: 0px 0px 15px 15px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const StyledBtnCont = styled.div`
   height: 84%;
   width: 85%;
`;
const StyledTopHozRow = styled.div`
   height: 40px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 7px;
`;
const StyledBottomCont = styled.div`
   height: 80%;
   width: 100%;
   display: flex;
   justify-content: space-between;
`;
const StyledVertRow = styled.div`
   height: 100%;
   width: 56px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;




