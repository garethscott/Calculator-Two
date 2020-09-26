import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledButton>
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
   align-items: center;
`;

