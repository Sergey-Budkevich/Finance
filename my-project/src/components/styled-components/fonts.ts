import styled from "styled-components";

type PopUpTitleProps = {
    textAlign?: 'center' | 'end' | 'start',
}

export const PopUpTitle = styled.h2<PopUpTitleProps>`
    font-family: var(--first-font);
    font-weight: var(--font-weight-medium);
    font-size: var(--title-size);
    line-height: 30px;
    text-align: ${props => props.textAlign || 'center'};
    color: var(--color-darkBlue);
`