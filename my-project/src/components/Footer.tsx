import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import Content from './Content'
import Logo from './Logo'
import InstagramIcon from './Icons/InstagramIcon'

function Footer(){
    return(
        <footer>
            <Content>
                <div className='footer-container'>
                    <div className='footer_info'>
                        <Link to="/">
                            <Logo/>
                        </Link>
                        <p className='footer-copyright'>© 2021, все права защищены</p>
                    </div>
                    <p className='author-info'>made by Sergey Budkevich</p>
                    <div className='footer-social'>
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                        </a>
                    </div>
                </div>

            </Content>
        </footer>
    )
}

export default Footer