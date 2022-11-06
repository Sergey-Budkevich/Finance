import React, { useEffect, useState } from "react";
import CryptoCoin from "../types/CryptoCoin";
import CoinBlock from "./coin";
import Content from "./Content";
import '../styles/coinList.css'


function CoinList(){
    let [coinList,setCoinList] = useState<CryptoCoin[]> ([])

useEffect(() =>{
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
    };
    
    (async function () {
    await fetch('https://coinranking1.p.rapidapi.com/coins?limit=20', options)
    .then(response => response.json())
    .then(res => setCoinList(res.data.coins))
    .catch(err => console.error(err));
    }())
},[])


    return (
        <Content>
            <div className="container">
                <h2 className="title">Курсы криптовалют на сегодня</h2>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>Валюта</th>
                            <th><button className="table-head-btn btn" type="button">Стоимость</button></th>
                            <th><button className="table-head-btn btn" type="button">Капитализация</button></th>
                            <th><button className="table-head-btn btn"   type="button">Объём (24ч.)</button></th>
                            <th><button className="table-head-btn btn" type="button">Изменение (24 ч.)</button></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                        coinList.length &&
                        coinList.map( item => 
                        <CoinBlock key={ item.uuid }
                        icon={ item.iconUrl }
                        name={ item.name }
                        symbolName={ item.symbol }
                        price={ item.price }
                        capitalization={ item.marketCap }
                        volume={ item["24hVolume"]}
                        change={ item.change }
                        />  )
                    }
                    </tbody>
                </table>
                <div className="pagination">
                    <button className="btn" type="button">1</button>
                    <button className="btn" type="button">2</button>
                    <button className="btn" type="button">3</button>
                </div>
            </div>
        </Content>
    )
}



export default CoinList