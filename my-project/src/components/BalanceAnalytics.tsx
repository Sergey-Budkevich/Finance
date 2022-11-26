import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/BalanceAnalytics.css"
import AnalyticsBalanceCard from './AnalyticsBalanceCard';
import Button from './Button';
import BalanceIcon from './Icons/BalanceIcon';
import BarsIcon from './Icons/BarsIcon';
import CoinsIcon from './Icons/CoinsIcon';
import LineGraphIcon from './Icons/LineGraphIcon';

function BalanceAnalytics() {
    return (
        <div className='analytics'>
            <div className="analytics_top-row">
                <div className="analytics_graph">
                    Здесь будет график на основе данных
                </div>
                <div className="analytics_balance">
                    <h3 className='analytics_balance-subtitle'>
                        <BalanceIcon/>Баланс UBR 
                    </h3>
                    <h2 className='analytics_balance-title title'>10 UBR</h2>
                    <Link className='analytics_balance-link' to={''}>
                        <Button className={'light'} type={'button'}>Пополнить</Button>
                    </Link>
                    <div className='analytics_balance-image'>
                        <img src="../images/balance-card-background.png" alt="balance"/>
                    </div>
                </div>
            </div>
            <div className='analytics_bottom-row'>
                    <AnalyticsBalanceCard balance={"-37"} increase={"-105"} time={'Сегодня'} icon={<CoinsIcon/>}/>
                    <AnalyticsBalanceCard balance={"+37"} increase={"+105"} time={'Неделя'} icon={<BarsIcon/>}/>
                    <AnalyticsBalanceCard balance={"+120"} increase={"+105"} time={'Месяц'} icon={<LineGraphIcon/>}/>
                </div>
        </div>
    );
}

export default BalanceAnalytics;