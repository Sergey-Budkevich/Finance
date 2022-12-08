import styled from "styled-components";

type PopUpTitleProps = {
    textAlign?: 'center' | 'end' | 'start',
}

export const PopUpTitle = styled.h2<PopUpTitleProps>`
    font-family: var(--first-font);
    font-weight: var(--font-weight-medium);
    font-size: var(--subtitle-size);
    line-height: 30px;
    text-align: ${props => props.textAlign || 'center'};
    color: var(--color-darkBlue);
`

type TitleProps = {
    textAlign?: 'center' | 'end' | 'start'
    color?: string,
}
export const Title = styled.h2<TitleProps>`
    font-weight: var(--font-weight-bold);
    font-size: var(--title-size);
    line-height: 120%;
    font-family: var(--first-font);
    font-weight: var(--font-weight-medium);
    text-align: ${props => props.textAlign || 'center'};
    ${props => props.color && `color: ${props.color}`};
`