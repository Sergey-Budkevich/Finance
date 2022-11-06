import React from 'react'

type PropsType = {
    src: string,
    alt: string,
    width?: string,
    height?: string,
}

function Image( { src,alt,width,height }:PropsType ){
    return(
        <div className='image-wrapper'>
            <img src={ src } alt={ alt } width={ width } height={ height }/>
        </div>
    )
}

export default Image