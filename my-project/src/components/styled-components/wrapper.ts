import styled from "styled-components";

export const CardWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #29246A;
        opacity: 0.3;
    }
`

type CardProps = {
    maxWidth?: string,
    zIndex?: number,
    padding?: string
}

export const Card = styled.div<CardProps>`
    position: relative;
    max-width: ${props => props.maxWidth ||  '490px'};
    width: 100%;
    ${props => props.zIndex && `z-index: ${props.zIndex};`}
    background-color: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(197, 197, 197, 0.25);
    border-radius: 10px;
    ${props => props.padding && `padding: ${props.padding};`}
`

type FlexProps = {
    flexDirection?: 'column' | 'row',
    alignItems?: 'stretch' | 'center' | 'start' | 'end',
    justifyContent?: 'space-between' | 'center',
    wrap?: 'wrap',
}; 

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    flex-wrap: ${props => props.wrap || 'no-wrap'}
`