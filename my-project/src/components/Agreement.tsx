import React from 'react'
import Button from './Button'
import Content from './Content'
import '../styles/Agreement.css'
import { Link } from 'react-router-dom'


function Agreement(){
    return(
        <section className='agreement'>
            <Content>
                <div className='agreement-container'>
                    <div className='agreement-image-block'>
                        <img src='./images/agreement_image.png' alt='agreement' />
                    </div>
                    <div className='agreement-block'>
                        <h2 className='title agreement-title'>Пользовательское соглашение</h2>
                        <Link to={'user-agreement'}>
                            <Button className={'orange'} type={'button'}>Ознакомиться</Button> 
                        </Link>              
                    </div>
                </div>
            </Content>
        </section>
    )
}

export default Agreement