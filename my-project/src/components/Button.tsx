import React from "react";
import '../styles/Button.css'


type PropsType = {
    children: string,
    className: "dark" | "orange" | "purple" | "transparent" | "light",
    type: "button" | "submit" | "reset",
    textColor?: string,
    onClick?: () => void,
    disabled?: true | false,

}

function Button( { children, className, type, textColor, onClick,disabled }: PropsType ){
    return(
        <button className={ `${ className } custom-btn ${disabled ? 'disabled' : ''}` }
            style={{color:`${textColor} `, border:`1px solid ${textColor}`}}
            type={ type }
            onClick={onClick}
            disabled={disabled}>
            { children }
        </button>
    )
}

export default Button