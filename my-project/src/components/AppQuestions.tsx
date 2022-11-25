import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import "../styles/AppQuestions.css"
import Button from './Button';
import Content from './Content';
import FeedbackForm from './FeedbackForm';

import Question from './Question';


function AppQuestions() {
    return (
        <>
        <section className='app-questions'>
            <Content>
                <div className='app-questions_header'>
                    <h2 className='app-questions_title title'>FAQ</h2>
                    <Link to="feedback">
                        <Button className="dark" type="button">Свяжитесь с нами</Button>
                    </Link>
                </div>
                <div className='app-questions_questions-block'>
                    <Question title={"Как произвести оплату за подключение Stripe?"} id={"1"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                    <Question title={"Как произвести оплату за подключение Stripe?"} id={"2"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                    <Question title={"Как произвести оплату за подключение Stripe?"} id={"3"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                    <Question title={"Как произвести оплату за подключение Stripe?"} id={"4"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                    Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                </div>  
            </Content>
        </section>
        <Outlet/>
        </>
    );
}

export default AppQuestions;