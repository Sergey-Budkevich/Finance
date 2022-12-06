import Content from './Content';
import "../styles/Investments.css"
import TariffsCard from './TariffsCard';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import Button from './Button';

function Investments() {
    const {currentTariff, refLink} = useAppSelector(state => state.userInfo)
    
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
                            <div className="programm_card--product programm_card">
                                <div className='programm_card--product-header'>
                                    <h4 className='programm_card--product-title'>Ваши инвестиционные продукты: </h4>
                                </div>
                                <div className='programm_card--product-body'>
                                    <div className="programm_card--product-bar">
                                        <p className="programm_card--product-name">{currentTariff.toUpperCase()}</p>
                                    </div>
                                    <p className='programm_card--product-date'>
                                        <span>Дата открытия: 01.01.2023</span>
                                        <span>Дата открытия: 01.01.2024</span>
                                    </p>
                                </div>
                            </div>
                            <div className="programm_card--invest programm_card">
                                <div className='programm_card--invest-header'>
                                    <h4 className='programm_card--invest-title'>Приглашенно в инвест: </h4>
                                </div>
                                <div className='programm_card--invest-body'>
                                    <p className='programm_card--invest-text'>Пользователи 1 уровня - <span>5 человек</span></p>
                                    <p className='programm_card--invest-text'>Пользователи 2 уровня - <span>1 человек</span></p>
                                </div>
                            </div>
                            <div className="programm_card--balance programm_card">
                                <div className='programm_card--balance-header'>
                                    <h4 className='programm_card--balance-title'>Баланс инвестиционного кошелька </h4>
                                    <p className='programm_card--balance-bar'>10 UBR</p>
                                </div>
                                <div className='programm_card--balance-body'>
                                    <p className='programm_card--balance-text'>В ожидании</p>
                                    <p className='programm_card--expectation-bar'>5 UBR</p>
                                </div>
                            </div>
                        </div>
                        <div className='programm_referal-link'>
                        <div className='programm_referal-info'>
                            <h4 className='programm_referal-title'>Ваша реферальная ссылка:</h4>
                            <div className="programm-referal-info_items">
                                <p className='programm-referal-info_link'>{refLink}</p>
                                <Button className={'purple'} type={'button'} onClick={() => navigator.clipboard.writeText(`${refLink}`)}>Скопировать</Button>
                            </div>
                        </div>
                        <div className='programm-referal-info_image'>
                            <img src="../images/investment-programm.png" alt="investments" />
                        </div>
                    </div>
                    </div>
                }
            </Content>   
            <Outlet/>
        </section>
        </>
    );
}

export default Investments;