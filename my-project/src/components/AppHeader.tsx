import React from 'react';
import InstagramIcon from './Icons/InstagramIcon';
import NotificationIcon from './Icons/NotificationIcon';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import styled from 'styled-components';
import { Content, Flex } from './styled-components/wrapper';

function AppHeader() {
    const {email} = useAppSelector(state => state.userInfo)
    const symbolIndex = email?.indexOf('@');

    return (
        <AppHeaderWrapper>
            <Content>
                <Flex justifyContent='space-between' alignItems='center'>
                    <HeaderTitle>Добро пожаловать, {email ? email.slice(0,symbolIndex) : "Гость"} !</HeaderTitle>
                    <Flex alignItems='center'>
                        <HeaderSocial>
                            <a href="https://www.instagram.com/">
                                <InstagramIcon app={true}/>
                            </a>
                        </HeaderSocial>
                        <Flex alignItems='center' columnGap='15px'>
                            <Link to="/">
                                <NotificationIcon/>
                            </Link>
                            <UserImage>
                                <Flex justifyContent='center' alignItems='center'>
                                    <img src="./images/Avatar.png" alt="avatar" />
                                </Flex>
                            </UserImage>
                        </Flex>
                    </Flex>
                </Flex>
            </Content>
        </AppHeaderWrapper>
    );
}

const AppHeaderWrapper = styled.div`
    width: 100%;
    background-color: var(--color-white);
    padding 18px 0;
`
const HeaderTitle = styled.h3`
    line-height: 25px;
    color: var(--color-darkGray);
    font-weight: var(--font-weight-SemiBold);
`
const HeaderSocial = styled.div`
    margin-right: 70px;
`
const UserImage = styled.div`
    max-width: 50px;
    max-height: 50px;
    border-radius:50%;
    img{
        width: 100%;
        height: 100%;
    }
`
export default AppHeader;