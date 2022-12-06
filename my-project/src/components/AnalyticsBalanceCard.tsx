import React from 'react';
import IncreaseIcon from './Icons/IncreaseIcon';
import "../styles/AnalyticsBalanceCard.css"
import CoinsIcon from './Icons/CoinsIcon';
import { color } from '@mui/system';
import { useAppSelector } from '../hooks/hooks';
import { UserTransaction } from '../types/User';

type PropsType = {
    balance?: string | null,
    // increase: string,
    transactions: UserTransaction[] | null ,
    time: "Сегодня" | "Неделя" | "Месяц",
    icon: any
}

function AnalyticsBalanceCard({time, icon, transactions, balance}:PropsType) {

    let cardBalance = transactions?.reduce((prev,item) => {
        if(item.operation === 'пополнение'){
            return prev + item.amount
        }
        return prev - item.amount
    },0);

    return (
        <div className='balance-card'>
            <div className='balance-card_info'>
                <h3 className='balance-card_balance'>{ cardBalance ? cardBalance > 0 ? '+' : '-' : '' } {cardBalance ? `${cardBalance} UBR` : ''}</h3>
                <p className='balance-card_increase'>
                    <IncreaseIcon/>
                    <span>100 %</span>
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


// style={{color: increaseState === "positive" ? "#27AE60" : increaseState === "negative" ? "red" : ''}

{/* <h3 className='balance-card_balance'>{transactions?.operation === 'пополнение' ? '+' : transactions?.operation === 'списание' ? '-' : ''} {`${balance} UBR`}</h3> */}
