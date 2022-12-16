import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/BalanceAnalytics.css"
import AnalyticsBalanceCard from './AnalyticsBalanceCard';
import Button from './Button';
import BalanceIcon from './Icons/BalanceIcon';
import BarsIcon from './Icons/BarsIcon';
import CoinsIcon from './Icons/CoinsIcon';
import LineGraphIcon from './Icons/LineGraphIcon';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from '../hooks/hooks';
import CustomLink from './base/CustomLink';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);



function BalanceAnalytics() {
    const {transactionList,balance} = useAppSelector(state => state.userInfo)

    let labels:string[] = transactionList.map( (item) => item.date);
    const ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: `Карта изменений баланса`,
            },
        },
    };
    const data = {
        labels,
        datasets : [
            {
                label: "Баланс",
                data: transactionList.map( (item) => item.currentBalance),
                borderColor: 'rgb(147, 77, 255)',
                backgroundColor: 'rgba(147, 77, 255, 0.5)',
                tension: 0.15,
                fill: true
            },
        ]
    }

    return (
        <div className='analytics'>
            <div className="analytics_top-row">
                <div className="analytics_graph">
                    <Line options={ChartOptions} data={data}></Line>
                </div>
                <div className="analytics_balance">
                    <h3 className='analytics_balance-subtitle'>
                        <BalanceIcon/>Баланс UBR 
                    </h3>
                    <h2 className='analytics_balance-title title'>{balance} UBR</h2>
                    {/* линке маргин */}
                    <div className='btn_container'>
                        <CustomLink className='analytics-link' to={'refill'}>
                            <Button className={'light'} type={'button'} width={'100%'} height={'40px'}>Пополнить</Button>
                        </CustomLink>
                        <CustomLink className='analytics-link' to={'decrease'}>
                            <Button className={'orange'} type={'button'} width={'100%'} height={'40px'}>Списать</Button>
                        </CustomLink>
                    </div>
                    <div className='analytics_balance-image'>
                        <img src="../images/balance-card-background.png" alt="balance"/>
                    </div>
                </div>
            </div>
            <div className='analytics_bottom-row'>
                <AnalyticsBalanceCard time={'Сегодня'} icon={<CoinsIcon />}/>
                <AnalyticsBalanceCard time={'Неделя'} icon={<BarsIcon/>}/>
                <AnalyticsBalanceCard time={'Месяц'} icon={<LineGraphIcon/>}/>
            </div>
            <Outlet/>
        </div>
    );
}

export default BalanceAnalytics;
