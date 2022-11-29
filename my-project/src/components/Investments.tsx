import React, { useEffect } from 'react';
import Content from './Content';
import "../styles/Investments.css"
import TariffsCard from './TariffsCard';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

function Investments() {
    const {currentTariff} = useAppSelector(state => state.tariff)
    
    return (
        <>
        <section className='investments'>
            <Content>
                { currentTariff === null ? 
                    <div className='investments_container'>
                        <h2 className='title investments_title'>Инвестиционные продукты </h2>
                        <div className="investments_cards">
                            <TariffsCard title={"average"} percent={"0.25%"} color={"linear-gradient(258.01deg, #A76FFD 13.51%, #519CFD 119.02%)"} />
                            <TariffsCard title={"elevated"} percent={"0.33%"} color={"linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%)"} />
                            <TariffsCard title={"upper"} percent={"0.49%"} color={"linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%"} />
                            <TariffsCard title={"supreme"} percent={"ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ"} color={"linear-gradient(250.12deg, #B93CE8 -7.53%, #FF9AEA 82.03%)"} />
                        </div>
                    </div>  
                    :
                    <div className='programm_container'>
                        <h2 className='programm_title'>Инвестиционная программа</h2>
                        <div className='programm_cards'>
                            <div className="programm_card">
                                <div className='programm_card-header'>
                                    <h4 className='programm_card-title'>Ваши инвестиционные продукты: </h4>
                                </div>
                                <div className='programm_card-body'>
                                    <div className="programm_card-bar">
                                        <p className="programm_card-name">{currentTariff.toUpperCase()}</p>
                                    </div>
                                    <p className='programm_card-date'>
                                        <span>Дата открытия: 01.01.2023</span>
                                        <span>Дата открытия: 01.01.2024</span>
                                    </p>
                                </div>
                            </div>
                            <div className="programm_card">
                                <div className='programm_card-header'>
                                    <h4 className='programm_card-title'>Приглашенно в инвест: </h4>
                                </div>
                                <div className='programm_card-body'>
                                    <p className='programm_card-text'>Пользователи 1 уровня - <span>5 человек</span></p>
                                    <p className='programm_card-text'>Пользователи 2 уровня - <span>1 человек</span></p>
                                </div>
                            </div>
                            <div className="programm_card">
                                <div className='programm_card-header'>
                                    <h4 className='programm_card-title'>Баланс инвестиционного кошелька </h4>
                                </div>
                                <div className='programm_card-body'>
                                    <div className="programm_card-bar">
                                        <p className="programm_card-name">{currentTariff.toUpperCase()}</p>
                                    </div>
                                    <p className='programm_card-date'>
                                        <span>Дата открытия: 01.01.2023</span>
                                        <span>Дата открытия: 01.01.2024</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Content>        
        </section>
        </>
    );
}

export default Investments;