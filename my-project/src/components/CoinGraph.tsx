import React, { useEffect, useState } from 'react';
import Content from './Content';
import { Line } from 'react-chartjs-2';
import CryptoCoin from '../types/CryptoCoin';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCoinList } from '../store/slices/CoinListSlice';
import '../styles/CoinGraph.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


function CoinGraph() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    }

    const dispatch = useAppDispatch();
    const {coinList, status, error } = useAppSelector(state => state.cryptoCoinList)
    let limit:number = 20;
    let [coin,setCoin] = useState<CryptoCoin>()
    let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: `Карта изменений ${coin?.name}`,
            },
        },
    };
    
    const data = {
        labels,
        datasets : [
            {
                label: coin?.name || '',
                data: coin?.sparkline.filter( (_ ,i) => i % 2 === 0),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.15,
                fill: true
            },
        ]
    }

useEffect (()=> {
    (async function ( ) {
        const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd`, options);
        const data = await response.json();
        setCoin(data.data.coin)
}())
    dispatch(fetchCoinList([1,limit]))
},[])

    return (
        <section className='coin-graph'>
            <Content>
                <div className='container'>
                    <Line options={ChartOptions} data={data}></Line>
                    <div className='coins-block' >
                        <h2 className='title coin-block_title'>Топ {limit} монет</h2>
                        <div className='coin-cards'>
                            {!!coinList.length && coinList.map(coin => 
                                <div className='coin-card' key={coin.uuid} onClick={()=>setCoin(coin)}>
                                    <img src={coin.iconUrl} alt={coin.name}/>
                                    <div className='coin-card_info'>
                                        <h3 className='coin-card_title'>{coin.name}</h3>
                                        <p className='coin-card_price'>{Number(coin.price).toFixed(4)} $</p>
                                    </div>
                                </div>
                                )}
                        </div>
                    </div>
                </div>  
            </Content>
        </section>
    );
}

export default CoinGraph;