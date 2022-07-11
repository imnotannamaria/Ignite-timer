import styled, { css }  from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonConteinerProps {
    variant: ButtonVariant;
}

const buttonvariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonConteinerProps> `
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    cursor: pointer;
    font-weight: bold;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white}

    /* 
    ${props => {
        return css`
            background-color: ${buttonvariants[props.variant]}
        `
    }} 
    */
`

