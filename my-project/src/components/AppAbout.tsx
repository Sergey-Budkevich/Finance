import React from 'react';
import Content from './Content';
import "../styles/AppAbout.css"
import { Title } from './styled-components/fonts';

function AppAbout() {
    return (
        <section className='app-about'>
            <Content>
                <Title color='var(--color-white)' textAlign='start'>О компании </Title>
                <div className='app-about_container'>
                    <div className='app-about_info'>
                        <h3 className='app-about_subtitle '>Uroboros Investment</h3>
                        <div className='app-about_description'>
                            <p>Верифицированный аккаунт на юр. лицо, подходит как для опытных ecom предпринимателей, так и для новичков</p>
                            <p>Самый выгодный во всей индустрии способ начать принимать платежи, без потерь в стабильности и безопасности.</p>
                            <p>Начиная с оборота в $7к в месяц бесплатный апгрейд до тарифа PRO. Аккаунт, зарегистрированный на физ. лицо. Принадлежит лично вам, никаких комиссий или ежемесячных оплат.</p>
                            <p>Вариант для новичков или для тех кто хочет владеть своим аккаунтом и ни от кого не зависеть.</p>
                        </div>
                    </div>
                    <div className='app-about_image'>
                        <img src="../images/app-about-image.png" alt="about-us" />
                    </div>
                </div>
            </Content>
        </section>
    );
}

export default AppAbout;






