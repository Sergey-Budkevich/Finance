import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './base/CustomLink';
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
import { Flex } from './styled-components/wrapper';

function SideBar() {
    return (
        <Aside>
            <Flex flexDirection='column' alignItems='center'>
                <Link style={{margin : '20px 25px 0'}} className='link' to="/">
                    <Logo fontSize='14px'/>
                </Link>
                <Navbar>
                    <Flex flexDirection='column' alignItems='flex-start'>
                        <CustomLink sidebarLink={true} to='balance'>
                            <BalanceIcon/>
                            <span>Balance</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='converter'>
                            <BargainingIcon/>
                            <span>Converter</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='crypto-currency'>
                            <GamesIcon/>
                            <span>Coin list</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='investments'>
                            <InvestmentsIcon/>
                            <span>Investments</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='crypto-graph'>
                            <EducationIcon/>
                            <span>Coin graph</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='refferals'>
                            <RefferalsIcon/>
                            <span>Refferals</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='FAQ'>
                            <FAQIcon/>
                            <span>FAQ</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='settings'>
                            <SettingsIcon/>
                            <span>Settings</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='about'>
                            <AboutIcon/>
                            <span>About</span>
                        </CustomLink>
                        <CustomLink sidebarLink={true} to='roadmap'>
                            <RoadmapIcon/>
                            <span>Roadmap</span>
                        </CustomLink>
                    </Flex>
                </Navbar>
                <Line></Line>
                <LinkWrapper>
                    <a href="https://play.google.com/store/games?hl=ru&gl=US&pli=1">
                        <img src="./images/Google_Play-Logo 1.png" alt="Google play" />
                    </a>
                </LinkWrapper>
            </Flex>
        </Aside>
    );
}

const Aside = styled.aside`
    width: 17%;
    background-color: #29246A;
`
const Navbar = styled.nav`
    width: 100%;
    padding: 25px 0;
    text-align: left;
`
const Line = styled.div`
    width: calc(100% - (25px * 2));
    border-bottom: 2px solid #934DFF;
`
const LinkWrapper = styled.div`
    margin-top: 20px;
    padding-left: 25px;
    align-self: flex-start;
    :hover{
        scale:1.1
    }
`

export default SideBar;