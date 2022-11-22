import React, { useEffect, useState } from 'react';
import './styles/App.css';
import CoinList from './components/СoinList';
import Converter from './components/Converter';
import NewsBlock from './components/News';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import CoinGraph from './components/CoinGraph';

function App() {

  return (
    <div className="App">
      {/* <CoinGraph/> */}
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='crypto-currency' element={ <CoinList /> }></Route>
          <Route path='converter' element={ <Converter/> }></Route>
          <Route path='crypto-news' element={ <NewsBlock/> }></Route>
          <Route index path='/' element={ <Main/>}></Route>
          <Route path='crypto-graph' element={<CoinGraph/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
