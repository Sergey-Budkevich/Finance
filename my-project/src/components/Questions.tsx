import React from "react";
import Content from "./Content";
import '../styles/Questions.css'
import Question from "./Question";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Button from "./Button";
import CustomLink from "./base/CustomLink";
import { useAppSelector } from "../hooks/hooks";


function Questions(){

    return(
        <>
        <section className="questions">
            <Content>
                <div className="questions-container">
                    <h2 className="questions-title title">FAQ: Часто задаваемые вопросы</h2>
                    <div className="questions-block">
                        <Question title={"Как произвести оплату за подключение Stripe?"} id={"1"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                            <Question title={"Как произвести оплату за подключение Stripe?"} id={"2"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                            <Question title={"Как произвести оплату за подключение Stripe?"} id={"3"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                            <Question title={"Как произвести оплату за подключение Stripe?"} id={"4"}>На вашем аккаунте будет комиссия 1.4% + €0.25 с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
Для примера работая через PayPal на ИП потеря от оборота будет составлять до 13.5-14% (Налог, пенсионка, комиссия и т.д.), а это очень часто больше половины прибыли, так что Stripe намного выгоднее.</Question>
                    </div>
                    <div className="callback-block ">
                        <div className="callback-block-info">
                            <h3 className="callback-block-title">Свяжитесь с нами</h3>
                            <p className="callback-block-text">Прежде чем заполнять форму обратной связи, убедитесь, что ответ на Ваш вопрос не содержиться в БАЗЕ ЗНАНИЙ</p>
                            <CustomLink to={'feedback'}>
                                <Button className={"orange"} width='290px' type={"button"} >Отправить сообщение</Button>
                            </CustomLink>
                        </div>
                        <div className="callback-block-image">
                            <img src="./images/questions_image.png" alt="woman" />
                        </div>
                    </div>
                </div>
            </Content>
        </section>
    </>
    )
}

export default Questions