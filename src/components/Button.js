import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledButton onClick={() => props.handleAddToInput(props.children)}>
            {props.children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.div`
   width: 56px;
   height: 40px;
   background: lightgrey;
   border-radius: 7px;
   display: flex;
   justify-content: center;
   font-family: 'Baloo Tammudu 2';
   font-size: 25px;
   font-weight: 600;
   color: rgb(91, 91, 91);
`;

