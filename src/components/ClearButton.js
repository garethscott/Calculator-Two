import React from 'react';
import styled from 'styled-components';

const ClearButton = (props) => {
    return (
        <StyledClearButton>
            {props.children}
        </StyledClearButton>
    )
}

export default ClearButton;

const StyledClearButton = styled.div`
   height: 40px;
   width: 120px;
   background-color: rgb(91, 91, 91);
   border-radius: 7px;
   display: flex;
   justify-content: center;
   font-family: 'Baloo Tammudu 2';
   font-size: 25px;
   font-weight: 600;
   color: rgb(255, 255, 255);
`;