import React from 'react';
import Content from './Content';
import "../styles/Refferals.css"
import Button from './Button';
import { Link } from 'react-router-dom';

function Refferals() {
    return (
        <section className='refferals'>
            <Content>
                <div className='refferals_container'>
                    <h2 className='title refferals_title'>Реферальная программа</h2>
                    <div className='refferals_header'>
                        <h3 className='refferals_subtitle'>Ваши рефералы:</h3>
                        <h4 className='refferals_user-name'>Старший реферал: <span>user264823</span> </h4>
                    </div>
                    <div className="refferals_cards">
                        <div className="refferals_card">
                            <div className="card_header">
                                <h4 className='card_title'>Gold</h4>
                                <div className='card_progress-bar'>78/1000</div>
                            </div>
                            <div className="card_body">
                                <p className='card_description'>Пользователи 1 уровня - <span>5 человек</span></p>
                                <p className='card_description'>Пользователи 2 уровня - <span>2 человек</span></p>
                            </div>
                        </div>
                        <div className="refferals_card">
                            <div className="card_header">
                                <h4 className='card_title'>Diamond</h4>
                                <div className='card_progress-bar'>78/2000</div>
                            </div>
                            <div className="card_body">
                                <p className='card_description'>Пользователи 1 уровня - <span>5 человек</span></p>
                                <p className='card_description'>Пользователи 2 уровня - <span>2 человек</span></p>
                            </div>
                        </div>
                        <div className="refferals_result">
                            <div className="result_header">
                                <h4 className='result_title'>Всего начисленно по реферальной программе</h4>
                                <div className='result_header-bar'>10 UBR</div>
                            </div>
                            <div className="result_body">
                                <p className='result_body-text'>В ожидании</p>
                                <div className='result_body-bar'>5 UBR</div>
                            </div>
                        </div>
                    </div>
                    <div className='refferals_link-block'>
                        <div className='link-block_info'>
                            <h4 className='link-block_title'>Ваша реферальная ссылка:</h4>
                            <div className="info_items">
                                <p className='info_link'>https://uroboros33314552</p>
                                <Button className={'purple'} type={'button'} >Скопировать</Button>
                            </div>
                        </div>
                        <div className='link-block_image'>
                            <img src="../images/refferals-image.png" alt="" />
                        </div>
                    </div>
                    <p className='refferls_info'>
                        <Link to="/refferars-info">Условия участия</Link> в реферальной программе
                    </p>
                </div>
            </Content>
        </section>
    );
}

export default Refferals;