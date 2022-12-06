import React from 'react';
import Content from './Content';
import "../styles/AppHeader.css"
import InstagramIcon from './Icons/InstagramIcon';
import NotificationIcon from './Icons/NotificationIcon';
import { Link } from 'react-router-dom';
import "../styles/AppHeader.css"
import { useAppSelector } from '../hooks/hooks';

function AppHeader() {
    const {email} = useAppSelector(state => state.userInfo)
    const symbolIndex = email?.indexOf('@');

    return (
        <div className='app-header'>
            <Content>
                <div className='header_container'>
                    <h3 className='header_title'>Добро пожаловать, {email ? email.slice(0,symbolIndex) : "Гость"} !</h3>
                    <div className='header_info-block'>
                        <div className='header_social'>
                            <a href="https://www.instagram.com/">
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
        </div>
    );
}

export default AppHeader;