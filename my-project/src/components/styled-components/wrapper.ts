import styled from "styled-components";

type PopUpProps = {
    maxWidth?: string,
    zIndex?: number,
    padding?: string
}
export const PopUp = styled.div<PopUpProps>`
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
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end',
    justifyContent?: 'space-between' | 'center',
    wrap?: 'wrap',
    flex?: number,
    columnGap?: string,
}; 
export const Flex = styled.div<FlexProps>`
    display: flex;
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection}` };
    ${props => props.alignItems && `align-items: ${props.alignItems}` };
    ${props => props.wrap && `flex-wrap: ${props.wrap}`};
    ${props => props.flex && `flex: ${props.flex}` };
    ${props => props.justifyContent && `justify-content: ${props.justifyContent}` };
    ${props => props.columnGap && `column-gap: ${props.columnGap}` };
`

export const Content = styled.div`
    max-width: calc(1170px + 16px * 2);
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
`