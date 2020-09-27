import React from 'react';
import styled from 'styled-components';

const OnButton = (props) => {
    return (
        <StyledOnButton>
            {props.children}
        </StyledOnButton>
    )
}

export default OnButton;

const StyledOnButton = styled.div`
    height: 40px;
    width: 56px;
    border-radius: 7px;
    background-color: rgb(253, 77, 91);
    display: flex;
    justify-content: center;
    font-family: 'Baloo Tammudu 2';
    font-size: 25px;
    font-weight: 600;
    color: white;
`;