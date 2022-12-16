import React, { useEffect } from 'react';
import Content from './Content';
import {  Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from './styled-components/wrapper';
import { Title } from './styled-components/fonts';
import CustomLink from './base/CustomLink';

function Balance() {
const navigate = useNavigate()
useEffect(()=> {
    navigate('analytics')
},[])

    return (
        <BalanceWrapper>
            <Content>
                <BalanceContainer>
                    <Content>
                        <Flex alignItems='stretch' justifyContent='space-between' columnGap='45px'>
                            <Title color='var(--color-darkGray)'>Баланс</Title>
                            <CustomLink  to={'analytics'} btnLink={true} textColor={'var(--color-blue)'} padding={'0 45px'}>
                                Аналитика доходности
                            </CustomLink>
                            <CustomLink to={"history"} btnLink={true} textColor={'var(--color-blue)'} padding={'0 45px'}>
                                История пополнения и вывода
                            </CustomLink>
                        </Flex>
                        <Outlet/>
                    </Content>
                </BalanceContainer>
            </Content>
        </BalanceWrapper>
    );
}

const BalanceWrapper = styled.section`
    padding: var(--app-section-padding) 0;
`
const BalanceContainer = styled.div`
    padding: var(--app-container-padding) 0;
    background-color: var(--color-milk);
    border-radius: 12px ;
`


export default Balance;