import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { changeUserData } from '../store/slices/UserSlice';
import Button from './Button';
import Content from './Content';
import { Title } from './styled-components/fonts';
import { Card, Flex } from './styled-components/wrapper';

function NewSettings() {
    const {name, secondName, email, wallet, vkontakte, telegram, facebook, instagram, site} = useAppSelector(store => store.userInfo);
    const dispatch = useAppDispatch();
    let [userName, setUserName] = useState<string>(`${name ? name : ''}`);
    let [userSecondName, setUserSecondName] = useState<string>(`${secondName ? secondName : ''}`);
    let [userEmail, setUserEmail] = useState<string>(`${email ? email : ''}`);
    let [userSite, setUserSite] = useState<string>(`${site ? site : ''}`);
    let [userInstagram, setUserInstagram] = useState<string>(`${instagram ? instagram : ''}`);
    let [userFacebook, setUserFacebook] = useState<string>(`${facebook ? facebook : ''}`);
    let [userTelegram, setUserTelegram] = useState<string>(`${telegram ? telegram : ''}`);
    let [userVkontakte, setUserVkontakte] = useState<string>(`${vkontakte ? vkontakte : ''}`);
    let [userWallet, setUserWallet] = useState<string>(`${wallet ? wallet : ''}`);

const saveChanges = () => {
    let userData = {
        name : userName,
        secondName: userSecondName,
        wallet: userWallet,
        email: userEmail,
        site: userSite,
        instagram: userInstagram,
        facebook: userFacebook,
        telegram: userTelegram,
        vkontakte: userVkontakte
    }
    dispatch(changeUserData(userData))
}



    return (
        <SettingWrapper>
            <Content>
                <Flex flexDirection='column' alignItems='center' rowGap='25px'>
                    <Content>
                        <Title textAlign='start' color='var(--color-violet)'>
                            {name ? `${name} ${secondName}` : 'Имя Фамилия'}
                        </Title>
                    </Content>
                    <FormCard>
                        <Content>
                            <Flex flexDirection='column' alignItems='center'>
                                <CardTitle>
                                    Ваши данные
                                </CardTitle>
                                <InputWrapper>
                                    <input type={'text'} required value={userName} onChange={e => setUserName(e.target.value)} placeholder='Имя*'></input>
                                    <input type={'text'} value={userSecondName} onChange={e => setUserSecondName(e.target.value)} placeholder='Фамилия'></input>
                                </InputWrapper>
                            </Flex>
                        </Content>
                    </FormCard>
                    <FormCard>
                        <Content>
                            <Flex flexDirection='column' alignItems='center'>
                                <CardTitle>
                                    Контакты
                                </CardTitle>
                                <InputWrapper>
                                    <input type={'email'} required value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder='Email*'></input>
                                    <input type={'text'} value={userSite} onChange={e => setUserSite(e.target.value)} placeholder='Сайт: http://'></input>
                                </InputWrapper>
                            </Flex>
                        </Content>
                    </FormCard>
                    <FormCard>
                        <Content>
                            <Flex flexDirection='column' alignItems='center'>
                                <CardTitle>
                                    Социальные сети
                                </CardTitle>
                                <InputWrapper>
                                    <input type={'text'} value={userInstagram} onChange={e => setUserInstagram(e.target.value)} placeholder='Instagram'></input>
                                    <input type={'text'} value={userFacebook} onChange={e => setUserFacebook(e.target.value)} placeholder='Facebook'></input>
                                    <input type={'text'}  value={userTelegram} onChange={e => setUserTelegram(e.target.value)} placeholder='Telegram'></input>
                                    <input type={'text'} value={userVkontakte} onChange={e => setUserVkontakte(e.target.value)} placeholder='Vkontakte'></input>
                                </InputWrapper>
                            </Flex>
                        </Content>
                    </FormCard>
                    <FormCard>
                        <Content>
                            <Flex flexDirection='column' alignItems='center'>
                                <CardTitle>
                                Реквизиты криптокошелька
                                </CardTitle>
                                <InputWrapper>
                                    <input className='wallet' type={'text'} value={userWallet} onChange={e => setUserWallet(e.target.value)} placeholder='Ссылка на кошелек*'></input>
                                </InputWrapper>
                            </Flex>
                        </Content>
                    </FormCard>
                    <Button onClick={() => saveChanges()} className={'purple'} type={'button'} width={'300px'} height={'50px'}>Сохранить изменения</Button>
                </Flex>
            </Content>
        </SettingWrapper>
    );
}

const SettingWrapper = styled.section`
    background-color: var(--color-milk);
    padding: var(--app-section-padding) 0;
    button {
        margin-top: 40px;
    }
`
const FormCard = styled(Card)`
    padding: var(--app-container-padding) 0;
    width: 100%;
`
const CardTitle = styled.h3`
    width: 100%;
    font-weight: var(--font-weight-SemiBold);
    font-size: var(--text-normal-size);
    line-height: 120%;
    font-family: var(--first-font);
    text--align: start;
    color: var(--color-darkGray);
`
const InputWrapper = styled(Flex)`
    column-gap: 30px;
    row-gap: 15px;
    width: 100%;
    align-items: stretch;
    margin-top: 15px;
    flex-wrap: wrap;
    input{
        border-radius: 5px;
        border: 1px solid #E0E0E0;
        outline: none;
        padding: 15px;
        max-width: calc(50% - 30px / 2);
        width: 100%;
    }
    .wallet{
        max-width: 100%;
    }
`

export default NewSettings;