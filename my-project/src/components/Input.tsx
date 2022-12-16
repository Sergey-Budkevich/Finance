import React, { useEffect, useRef, useState } from 'react';
import "../styles/Input.css"

type PropsType = {
    type: "password" | "email" | "text" | "tel" | 'number',
    requared: boolean,
    placeholder: string,
    children?: string,
    classname?: string,
    name?: string,
    refElement? : React.RefObject<HTMLInputElement>
}

function Input( {type, requared, placeholder, children, classname, name, refElement}:PropsType ) {

    const [inputValue, setInputValue] = useState<string>('')


// useEffect ( ()=> {
//     console.log(inputValue);
// },[inputValue])


    return (
        <input className={`input ${classname}`} 
        value={inputValue}
        type={type} 
        required={requared} 
        placeholder={placeholder}
        name={name}
        ref={refElement}
        onChange={e => setInputValue(e.target.value)}>
        {children}
        </input>
    );
    
}

export default Input;