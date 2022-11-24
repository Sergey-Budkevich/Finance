import React, { useEffect, useState } from 'react';
import CoinList from './components/СoinList';
import Converter from './components/Converter';
import NewsBlock from './components/News';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import CoinGraph from './components/CoinGraph';
import UserAgreement from './components/UserAgreement';
import RegistrationForm from './components/RegistrationForm';
import AverageAgreement from './components/AverageAgreement';
import SignInForm from './components/SignInForm';
import RecoveryPassword from './components/RecoveryPassword';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Main/>}>
            <Route path="registration" element={<RegistrationForm/>}></Route>
            <Route path='entry' element={<SignInForm/>}></Route>
            <Route path="recovery" element={<RecoveryPassword/>}></Route>
          </Route>
          <Route path='average-agreement' element={<AverageAgreement/>}></Route>
          <Route path='crypto-currency' element={<CoinList />}></Route>
          <Route path='converter' element={<Converter/>}></Route>
          <Route path='crypto-news' element={<NewsBlock/>}></Route>
          <Route path='crypto-graph' element={<CoinGraph/>}></Route>
          <Route path='user-agreement' element={<UserAgreement/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


// <Routes>
// <Route path='/' element={<Layout/>}>
//   <Route path='crypto-currency' element={<CoinList />}></Route>
//   <Route path='converter' element={<Converter/>}></Route>
//   <Route path='crypto-news' element={<NewsBlock/>}></Route>
//   <Route index path='/' element={<Main/>}></Route>
//   <Route path='crypto-graph' element={<CoinGraph/>}></Route>
//   <Route path='user-agreement' element={<UserAgreement/>}></Route>
//   {/* <Route path='registration' element={<RegistrationForm/>}></Route> */}
// </Route>
// </Routes>