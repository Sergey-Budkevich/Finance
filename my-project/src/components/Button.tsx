import React from "react";
import '../styles/Button.css'


type PropsType = {
    children: string,
    className: "dark" | "orange",
    type: "button" | "submit" | "reset"
}

function Button( { children, className, type }: PropsType ){
    return(
        <button className={ `${ className } custom-btn` } type={ type }>{ children }</button>
    )
}

export default Button