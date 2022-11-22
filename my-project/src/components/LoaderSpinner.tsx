import React from 'react';
import '../styles/LoaderSpinner.css'


function LoaderSpinner( ) {


return (
    <div className='spinner-container'>
        <div className='spinner'></div>
    </div>
);
}

export default LoaderSpinner;

// type PropsType = {
//     status: "loading" | 'resolve' | 'rejected' | null,

// }

// status === "loading" ? disablePageScroll() : enablePageScroll()

// {   status === "loading" ?
// <div className='spinner-container'>
//     <div className='spinner'></div>
// </div> : ''
// }