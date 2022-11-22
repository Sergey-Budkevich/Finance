import React from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import '../styles/Header.css'
import Logo from './Logo'
import InstagramIcon from './Icons/InstagramIcon'


function Header(){
    return(
        <header>
            <Content>
                <nav className='navigation'>
                    <div className='top-row-navigation'>
                        <div className='logo'>
                            <Link to='/'>
                                <Logo/>
                            </Link>
                        </div>
                        <div className='social'>
                            <a href="https://www.instagram.com/">
                                <InstagramIcon/>
                            </a>
                        </div>
                    </div>
                    <div className='bottom-row-navigation'>
                        <Link className='link' to='/'>
                            Главная
                        </Link>
                        <Link className='link' to='crypto-currency'>
                            Курсы криптовалют
                        </Link>
                        <Link className='link' to='converter'>
                            Конвертер валют
                        </Link>
                        <Link className='link' to='crypto-news'>
                            Новости крипторынка
                        </Link>
                        <Link className='link' to='crypto-graph'>
                            Графики криптовалют
                        </Link>
                    </div>
                </nav>
            </Content>
        </header>
    )
}

export default Header