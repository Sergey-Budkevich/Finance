import React from 'react'
import '../styles/Logo.css'

type PropsType = {
    fontSize?: string
}

function Logo( {fontSize}:PropsType ){
    return(
        <div className='logo'>
            <img src='./images/logo.png' alt='logo' width="48px" height="50px" />
            <p className='logo-name' style={{fontSize:`${fontSize}`}}>Uroboros Investment</p>
        </div>
    )
}

export default Logo