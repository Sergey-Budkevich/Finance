import React from 'react';
import "../styles/SocialInput.css"


type PropsType = {
    image: any,
    name: string,
    placeholder: string
}

function SocialInput({image, name, placeholder}:PropsType) {
    return (
        <div className='social-input'> 
            <div>
                {image}
            </div>
            <input type="text" name={name} placeholder={placeholder}></input>
        </div>
    );
}

export default SocialInput;