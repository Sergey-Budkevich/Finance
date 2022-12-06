import styled from "styled-components";

type PopUpTitleProps = {
    textAlign?: 'center' | 'end' | 'start',
}

export const PopUpTitle = styled.h2<PopUpTitleProps>`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    text-align: ${props => props.textAlign || 'center'};
    color: #29246A;
`