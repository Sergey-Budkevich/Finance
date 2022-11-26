import React from 'react';
import IncreaseIcon from './Icons/IncreaseIcon';
import "../styles/AnalyticsBalanceCard.css"
import CoinsIcon from './Icons/CoinsIcon';
import { color } from '@mui/system';

type PropsType = {
    balance: string,
    increase: string,
    time: "Сегодня" | "Неделя" | "Месяц",
    icon: any
}

function AnalyticsBalanceCard({balance, increase, time, icon}:PropsType) {
    let increaseState:string = increase[0] === "+" ? "positive" : increase[0] === "-" ? "negative" : "neutral" 

    return (
        <div className='balance-card'>
            <div className='balance-card_info'>
                <h3 className='balance-card_balance'>{balance} UBR</h3>
                <p className='balance-card_increase'>
                    <IncreaseIcon/>
                    <span style={{color: increaseState === "positive" ? "#27AE60" : increaseState === "negative" ? "red" : ''}}>{increase}%</span>
                </p>
            </div>
            <div className="balance-card_title-block">
                <h3 className='balance-card_title'>{time}</h3>
                {icon}
            </div>
        </div>
    );
}

export default AnalyticsBalanceCard;