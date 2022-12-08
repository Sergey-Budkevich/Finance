import React from 'react'
import Button from './Button'
import Content from './Content'
import '../styles/Agreement.css'
import { Link } from 'react-router-dom'
import CustomLink from './base/CustomLink'


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
                        <CustomLink to={'user-agreement'}>
                            <Button className={'orange'} width='290px' type={'button'}>Ознакомиться</Button> 
                        </CustomLink>              
                    </div>
                </div>
            </Content>
        </section>
    )
}

export default Agreement