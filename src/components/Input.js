import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    return (
        <StyledOuterBox>
            <StyledInnerBox>
                {props.input}
            </StyledInnerBox>
        </StyledOuterBox>
    )
}

export default Input;

const StyledOuterBox = styled.div`
   width: 85%;
   height: 60px;
   background-color: rgb(91, 91, 91);
   border-radius: 7px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const StyledInnerBox = styled.div`
   width: 84%;
   height: 45px;
   background-color: lightgrey;
   border-radius: 7px;
   display: flex;
   justify-content: flex-end;
   padding-right: 10px;
   font-family: 'Baloo Tammudu 2';
   font-size: 25px;
   font-weight: 600;
   color: rgb(91, 91, 91);
   letter-spacing: 0.04em;
`;
