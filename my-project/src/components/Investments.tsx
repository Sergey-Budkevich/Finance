import React from 'react';
import Content from './Content';
import "../styles/Investments.css"
import TariffsCard from './TariffsCard';
import { Outlet } from 'react-router-dom';

function Investments() {
    return (
        <>
        <section className='investments'>
            <Content>
                <div className='investments_container'>
                    <h2 className='title investments_title'>Инвестиционные продукты </h2>
                    <div className="investments_cards">
                        <TariffsCard title={ "average" } percent={ "0.25%" } color={ "linear-gradient(258.01deg, #A76FFD 13.51%, #519CFD 119.02%)" }/>
                        <TariffsCard title={ "elevated" } percent={ "0.33%" } color={ "linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%)" }/>
                        <TariffsCard title={ "upper" } percent={ "0.49%" } color={ "linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%" }/>
                        <TariffsCard title={ "supreme" } percent={ "ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ" } color={ "linear-gradient(250.12deg, #B93CE8 -7.53%, #FF9AEA 82.03%)" }/>
                    </div>
                </div>
            </Content>
            <Outlet/>
        
        </section>

        </>
    );
}

export default Investments;