import React, { useEffect, useState } from 'react';
import './styles/App.css';
import CoinList from './components/coinList';
import Converter from './components/converter';
import NewsBlock from './components/news';
import './styles/converter.css'

import CryptoCoin from './types/CryptoCoin';
import Header from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='crypto-currency' element={ <CoinList /> }></Route>
          <Route path='converter' element={ <Converter/> }></Route>
          <Route path='crypto-news' element={ <NewsBlock/> }></Route>
          <Route index path='/' element={ <Main/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
