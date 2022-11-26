import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SideBar.css"
import AboutIcon from './Icons/AboutIcon';
import BalanceIcon from './Icons/BalanceIcon';
import BargainingIcon from './Icons/BargainingIcon';
import EducationIcon from './Icons/EducationIcon';
import FAQIcon from './Icons/FAQIcon';
import GamesIcon from './Icons/GamesIcon';
import InvestmentsIcon from './Icons/InvestmentsIcon';
import RefferalsIcon from './Icons/RefferalsIcon';
import RoadmapIcon from './Icons/RoadmapIcon';
import SettingsIcon from './Icons/SettingsIcon';
import Logo from './Logo';

function SideBar() {
    return (
        <aside className='sidebar'>
            <Link className='logo-link' to="/">
                <Logo fontSize='14px'/>
            </Link>
            <nav className='sidebar_rotes'>
                <Link className='sidebar_rote' to='/balance'>
                    <BalanceIcon/>
                    <span>Balance</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <BargainingIcon/>
                    <span>Buy/Sell</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <GamesIcon/>
                    <span>Games</span>
                </Link>
                <Link className='sidebar_rote' to='crypto-currency'>
                    <InvestmentsIcon/>
                    <span>Investments</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <EducationIcon/>
                    <span>Education</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <RefferalsIcon/>
                    <span>Refferals</span>
                </Link>
                <Link className='sidebar_rote' to='FAQ'>
                    <FAQIcon/>
                    <span>FAQ</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <SettingsIcon/>
                    <span>Settings</span>
                </Link>
                <Link className='sidebar_rote' to='/'>
                    <AboutIcon/>
                    <span>About</span>
                </Link>
                <Link className='sidebar_rote' to='crypto-graph'>
                    <RoadmapIcon/>
                    <span>Coin graph</span>
                </Link>
            </nav>
            <div className='sidebar_line'></div>
            <div className='sidebar_link-block'>
                <a href="https://play.google.com/store/games?hl=ru&gl=US&pli=1">
                    <img src="./images/Google_Play-Logo 1.png" alt="Google play" />
                </a>
            </div>
        </aside>
    );
}

export default SideBar;