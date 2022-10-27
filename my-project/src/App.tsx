import React, { useEffect, useState } from 'react';
import './App.css';
import Converter from './component/converter';
import './styles/converter.css'

import CryptoCoin from './type/cryptoCoin';

function App() {
  let [amountCurrentCurrency,setCurrency] = useState('0')
  let [desired,setDesired] = useState('')
  let [currencyCurrent,setCurrencyCurrent] = useState('USD')
  let [desiredCurrent,setDesiredCurrent] = useState('BYN')
  let [coinList,setCoinList] = useState <CryptoCoin[]> ([])
  


  

// useEffect(() =>{
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  
//   (async function () {
//     await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
//     .then(response => response.json())
//     .then(res => setCoinList(res.data.coins))
//     .catch(err => console.error(err));
//   }())
// },[])
// console.log(coinList);



  return (
    <div className="App">

      <Converter/>


      
      {/* {
        coinList.length ? 
        coinList.map( ( item ) => 
          <div key={item.uuid}>
            <p>{ item.name}</p>
            <img src={ item.iconUrl} width='30px' height='30px' alt="" />
          </div>
        ) : ''
      } */}

    </div>
  );
}

export default App;
