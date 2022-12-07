import React from "react";
import styled from "styled-components";

type PropsType = {
    children: string,
    className: "dark" | "orange" | "purple" | "transparent" | "light",
    type: "button" | "submit" | "reset",
    textColor?: string,
    onClick?: () => void,
    disabled?: true | false,
    width?: string,
    height?: string
}

function Button( { children, className, type, textColor, onClick, disabled, width, height }: PropsType ){
    return(
        <CustomButton className={ `${disabled ? 'disabled' : ''}` }
            style={{backgroundColor: className === 'dark' ? 'var(--color-darkBlue)' : 
            className === 'orange' ? 'var(--color-orange)' :
            className === 'purple' ? 'var(--color-violet)' : 
            className === 'light' ? 'var(--color-light)' : 'transparent' ,
            color: `${textColor}`,
            width: width,
            height: height
            }}
            type={ type }
            onClick={onClick}
            disabled={disabled}>
            { children }
        </CustomButton>
    )
}
{/* <CustomButton className={ `${ className } custom-btn ${disabled ? 'disabled' : ''}` }
            style={{color:`${textColor} `, border:`1px solid ${textColor}`}}
            type={ type }
            onClick={onClick}
            disabled={disabled}>
            { children }
        </CustomButton> */}

const CustomButton = styled.button`
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-weight: var(--font-weight-medium);
    font-size: var(--text-normal-size);
    line-height: var(--title-size);
    font-family: var(--first-font);
    color: var(--color-white);
    :hover{
        box-shadow: 3px 3px 3px 2px rgba(255, 255, 255, 0.3) inset;
    }
    :active{
        opacity: 0.8;
    }
`

export default Button