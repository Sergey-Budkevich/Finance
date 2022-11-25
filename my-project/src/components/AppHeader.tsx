import React from 'react';
import Content from './Content';
import "../styles/AppHeader.css"
import InstagramIcon from './Icons/InstagramIcon';
import NotificationIcon from './Icons/NotificationIcon';
import { Link } from 'react-router-dom';
import "../styles/AppHeader.css"

function AppHeader() {
    return (
        <header className='app-header'>
            <Content>
                <div className='header_container'>
                    <h3 className='header_title'>Добро пожаловать, Иван!</h3>
                    <div className='header_info-block'>
                        <div className='header_social'>
                            <a className='social-link' href="https://www.instagram.com/">
                                <InstagramIcon/>
                            </a>
                        </div>
                        <div className='header_user-block'>
                            <Link to="/">
                                <NotificationIcon/>
                            </Link>
                            <div className='user-block_image'>
                                <img src="./images/Avatar.png" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </header>
    );
}

export default AppHeader;