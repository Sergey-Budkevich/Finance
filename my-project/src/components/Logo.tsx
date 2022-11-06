import React from 'react'
import '../styles/Logo.css'


function Logo(){
    return(
        <div className='logo'>
            <img src='./images/logo.png' alt='logo' width="48px" height="50px" />
            <p className='logo-name'>Uroboros Investment</p>
        </div>
    )
}

export default Logo