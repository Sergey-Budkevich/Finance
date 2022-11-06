import React from 'react'
import Content from './Content'
import '../styles/Intro.css'
import DarkButton from './Button'
import Button from './Button'

function Intro(){
    return (
    <section className='intro'>
        <Content>
            <div className='intro-block'>
                <div className='intro-description'>
                    <h1 className='intro-title title'>Инвеструйте с помощью Uroboros Investment</h1>
                    <p className='intro-text'>Без открытия юр. лица и с гарантией замены аккаунта в случае блокировки по нашей вине</p>
                    <Button className='dark' type='button'>Регистрация</Button>
                </div>
                <div className='image-block'>
                    <img src="./images/intro_balance.png" alt="balance" />
                </div>
            </div>
        </Content>
    </section>
    )
}
export default Intro