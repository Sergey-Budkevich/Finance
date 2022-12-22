
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import "../styles/AppQuestions.css"
import CustomLink from './base/CustomLink';
import Button from './Button';
import Content from './Content';

import Question from './Question';
import { Title } from './styled-components/fonts';
import { Container, Flex, SectionWrapper } from './styled-components/wrapper';


function AppQuestions() {
    return (
        <>
        <SectionWrapper>
            <Content>
                <Container backgroundColor='var(--color-milk)'>
                    <Content>
                        <Flex justifyContent='space-between'>
                            <Title color='var(--color-darkGray)' textAlign='start'>FAQ</Title>
                            <CustomLink to="feedback">
                                <Button className="dark" type="button" width='255px' height='45px'>Свяжитесь с нами</Button>
                            </CustomLink>
                        </Flex>
                        <QuestionContainer>
                            <Content>
                                <Flex flexDirection='column'>
                                    <Question app={true} title={"Как произвести оплату за подключение Stripe?"} id={"1"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                                    <Question app={true} title={"Как произвести оплату за подключение Stripe?"} id={"2"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                                    <Question app={true} title={"Как произвести оплату за подключение Stripe?"} id={"3"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                                    <Question app={true} title={"Как произвести оплату за подключение Stripe?"} id={"4"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                                Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                                </Flex>
                            </Content> 
                        </QuestionContainer>
                    </Content>
                </Container>
            </Content>
        </SectionWrapper>
        <Outlet/>
        </>
    );
}

const QuestionContainer = styled(Container)`
    margin-top: 45px;
`
// const QuestionWrapper = styled(Content)`
//     .question-container{
//         border-bottom: 1px solid #e0e0e0;
//     };
//     .question-title{
//         font-family: var(--second-font);
//         font-weight: var(--font-weight-SemiBold);
//         font-size: var(--text-normal-size);
//         line-height: 25px;
//         color: var(--color-violet);
// };
//     .question-description-title{
//         font-weight: 600;
//         font-size: 22px;
//         line-height: 26px;
//         color: black;
//         font-family: 'Open Sans';
//     };
//     .question-description-text{
//         margin-top: 20px;
//         font-family: 'Open Sans';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 20px; 
//         color: #828282;
//     };
// `

export default AppQuestions;