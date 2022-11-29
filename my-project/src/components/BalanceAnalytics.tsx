import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/BalanceAnalytics.css"
import AnalyticsBalanceCard from './AnalyticsBalanceCard';
import Button from './Button';
import BalanceIcon from './Icons/BalanceIcon';
import BarsIcon from './Icons/BarsIcon';
import CoinsIcon from './Icons/CoinsIcon';
import LineGraphIcon from './Icons/LineGraphIcon';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);



function BalanceAnalytics() {

    let balance:any = [
        {
            date: "22.08.2021",
            balance: 1
        },
        {
            date: "23.08.2021",
            balance: 12
        },{
            date: "24.08.2021",
            balance:19
        },{
            date: "25.08.2021",
            balance: 34 
        },{
            date: "27.08.2021",
            balance: 22
        },{
            date: "29.08.2021",
            balance: 10
        },{
            date: "30.08.2021",
            balance: 51
        }
    ]
    let labels:string[] = balance.map( (item: { date: string; }) => item.date);

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
                data: balance.map( (item: { balance: string; }) => item.balance),
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