import React from 'react';
import IncreaseIcon from './Icons/IncreaseIcon';
import "../styles/AnalyticsBalanceCard.css"
import { useAppSelector } from '../hooks/hooks';
import moment from 'moment';

type PropsType = {
    // balance?: string | null,
    // increase: string,
    // transactions: UserTransaction[] | null ,
    time: "Сегодня" | "Неделя" | "Месяц",
    icon: any
}

function AnalyticsBalanceCard({time, icon,}:PropsType) {

    const {transactionList} = useAppSelector(state => state.userInfo)
    const currentDay = moment().format('l');
    const currentWeek = moment().subtract(7, 'days').calendar();
    const currentMonth = moment().subtract(30, 'days').calendar();

    let transactions = time === 'Сегодня' ? transactionList.filter(item => item.date === currentDay) : 
    time === 'Неделя' ? transactionList.filter(item => moment(item.date) > moment(currentWeek)) :
    time === 'Месяц' ? transactionList.filter(item => moment(item.date) > moment(currentMonth)) : null

    let cardBalance = transactions?.reduce((prev,item) => {
        if(item.operation === 'пополнение'){
            return prev + item.amount
        }
        return prev - item.amount
    },0);

    return (
        <div className='balance-card'>
            <div className='balance-card_info'>
                <h3 className='balance-card_balance'>{ cardBalance && cardBalance > 0 ? '+' : ''  } {cardBalance ? `${cardBalance} UBR` : '0 UBR'}</h3>
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

