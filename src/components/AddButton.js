import React from 'react';
import styled from 'styled-components';

const AddButton = (props) => {
    return (
        <StyledAddButton>
            {props.children}
        </StyledAddButton>
    )
}

export default AddButton

const StyledAddButton = styled.div`
    height: 88px;
    width: 56px;
    background-color: rgb(29, 175, 235);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Baloo Tammudu 2';
    font-size: 35px;
    font-weight: 600;
    color: rgb(255, 255, 255);
`;