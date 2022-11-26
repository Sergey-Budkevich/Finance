import React, { useEffect } from 'react';
import Content from './Content';
import "../styles/Balance.css"
import Button from './Button';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import BalanceAnalytics from './BalanceAnalytics';

function Balance() {

    // костыль или как исправить?

    // const navigate = useNavigate();

    // useEffect( () => {
    //     navigate("analytics")
    // },[])

    return (
        <section className='balance'>
            <Content>
                <div className="balance_container">
                    <div className='balance_header'>
                        <h2 className='balance_title title'>Баланс</h2>
                        <NavLink className="link" to={"analytics"}>
                            Аналитика доходности
                        </NavLink>
                        <NavLink className="link" to={"history"}>
                            История пополнения и вывода
                        </NavLink>
                    </div>
                    <div className='balance_body'>
                        <Outlet/>
                    </div>
                </div>
            </Content>
        </section>
    );
}

export default Balance;