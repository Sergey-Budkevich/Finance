import React from "react";
import Content from "./Content";
import '../styles/About.css'




function About(){
    return (
        <section className="about">
            <Content>
                <div className="about-container">
                    <div className="about-image-block">
                        <img src="./images/about_image.png" alt="balance" />
                    </div>
                    <div className="about-info">
                        <h2 className="title about-title">Uroboros Investment </h2>
                        <p className="about-text">
                            <span>Верифицированный аккаунт на юр. лицо, подходит как для опытных ecom предпринимателей, так и для новичков.</span>
                            <span>Самый выгодный во всей индустрии способ начать принимать платежи, без потерь в стабильности и безопасности.</span>
                            <span>Начиная с оборота в $7к в месяц бесплатный апгрейд до тарифа PRO. Аккаунт, зарегистрированный на физ. лицо. Принадлежит лично вам, никаких комиссий или ежемесячных оплат.</span>
                            <span>Вариант для новичков или для тех кто хочет владеть своим аккаунтом и ни от кого не зависеть.</span>
                        </p>
                    </div>
                </div>
            </Content>
        </section>
    )
}



export default About