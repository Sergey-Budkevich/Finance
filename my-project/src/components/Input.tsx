import React, { useEffect, useState } from 'react';
import "../styles/Input.css"

type PropsType = {
    type: "password" | "email" | "text" | "tel",
    requared: boolean,
    placeholder: string,
    children?: string,
    classname: string,
    name?: string,
}

function Input( {type, requared, placeholder, children, classname, name}:PropsType ) {

    const [inputValue, setInputValue] = useState<any>("")

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
        onChange={e => setInputValue(e.target.value)}>
        {children}
        </input>
    );
    
}

export default Input;