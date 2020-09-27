import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import AddButton from './components/AddButton';
import ClearButton from './components/ClearButton';
import OnButton from './components/OnButton';
import Input from './components/Input';
import EqualsButton from './components/EqualsButton'
import './App.css';

function App() {

  const [input, setInput] = useState({
    value: '',
  })

  const handleAddToInput = (val) => {
    setInput({
      value: input.value + val,
    })
  }

  const handleEquals = () => {
    setInput({
      value: eval(input.value)
    })
  }

  return (
    <StyledBody>
      <StyledWrapper>
        <StyledCalcTop>
          <Input input={input.value}></Input>
        </StyledCalcTop>
        <StyledCalcBottom>
          <StyledBtnCont>
            <StyledTopHozRow>
              <OnButton>On</OnButton>
              <ClearButton handleClear={() => setInput({ value: '' })}>Clear</ClearButton>
              <Button handleAddToInput={handleAddToInput}>/</Button>
            </StyledTopHozRow>
            <StyledBottomCont>
              <StyledVertRow>
                <Button handleAddToInput={handleAddToInput}>7</Button>
                <Button handleAddToInput={handleAddToInput}>4</Button>
                <Button handleAddToInput={handleAddToInput}>1</Button>
                <Button handleAddToInput={handleAddToInput}>.</Button>
              </StyledVertRow>
              <StyledVertRow>
                <Button handleAddToInput={handleAddToInput}>8</Button>
                <Button handleAddToInput={handleAddToInput}>5</Button>
                <Button handleAddToInput={handleAddToInput}>2</Button>
                <Button handleAddToInput={handleAddToInput}>0</Button>
              </StyledVertRow>
              <StyledVertRow>
                <Button handleAddToInput={handleAddToInput}>9</Button>
                <Button handleAddToInput={handleAddToInput}>6</Button>
                <Button handleAddToInput={handleAddToInput}>3</Button>
                <EqualsButton handleEquals={handleEquals}>=</EqualsButton>
              </StyledVertRow>
              <StyledVertRow>
                <Button handleAddToInput={handleAddToInput}>*</Button>
                <Button handleAddToInput={handleAddToInput}>-</Button>
                <AddButton handleAddToInput={handleAddToInput}>+</AddButton>
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
   display: flex;
   justify-content: center;
   align-items: center;
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




