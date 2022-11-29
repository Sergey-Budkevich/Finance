import React from "react";
import '../styles/Button.css'


type PropsType = {
    children: string,
    className: "dark" | "orange" | "purple" | "transparent" | "light",
    type: "button" | "submit" | "reset",
    textColor?: string,
    onClick?: () => void
}

function Button( { children, className, type, textColor, onClick }: PropsType ){
    return(
        <button className={ `${ className } custom-btn` }
            style={{color:`${textColor} `, border:`1px solid ${textColor}`}}
            type={ type }
            onClick={onClick}>
            { children }
        </button>
    )
}

export default Button