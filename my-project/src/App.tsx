import React, { useEffect, useState } from 'react';
import CoinList from './components/СoinList';
import Converter from './components/Converter';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import CoinGraph from './components/CoinGraph';
import UserAgreement from './components/UserAgreement';
import MainLayout from './Layout/MainLayout';
import AppQuestions from './components/AppQuestions';
import FeedbackForm from './components/FeedbackForm';
import Intro from './components/Intro';
import News from './components/News';
import Balance from './components/Balance';
import BalanceAnalytics from './components/BalanceAnalytics';
import BalanceHistory from './components/BalanceHistory';
import Investments from './components/Investments';
import AppAbout from './components/AppAbout';
import Settings from './components/Settings';
import Refferals from './components/Refferals';
import RegistrationForm from './components/RegistrationForm';
import SignInForm from './components/SignInForm';
import RecoveryPassword from './components/RecoveryPassword';
import TariffAgreement from './components/TariffsAgreement';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<h1 className='main-title'>Добро пожаловать в Uroboros Club!</h1>}></Route>
          <Route path='FAQ' element={<AppQuestions/>}>
            <Route path='feedback' element={<FeedbackForm/>}></Route>
          </Route>
          <Route path='investments' element={<Investments/>}></Route>
          <Route path='average-agreement' element={<TariffAgreement name={'Average'}/>}></Route>
          <Route path='elevated-agreement' element={<TariffAgreement name={'Elevated'}/>}></Route>
          <Route path='upper-agreement' element={<TariffAgreement name={'Upper'}/>}></Route>
          <Route path='supreme-agreement' element={<TariffAgreement name={'Supreme'}/>}></Route>
          <Route path='balance' element={<Balance/>}>
            <Route path='analytics' element={<BalanceAnalytics/>}></Route>
            <Route path='history' element={<BalanceHistory/>}></Route>
          </Route>
          <Route path='refferals' element={<Refferals/>}></Route>
          <Route path='about' element={<AppAbout/>}></Route>
          <Route path='roadmap' element={<UserAgreement/>}></Route>
          <Route path='crypto-currency' element={<CoinList />}></Route>
          <Route path='crypto-graph' element={<CoinGraph/>}></Route>
          <Route path='settings' element={<Settings/>}></Route>
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Main/>}>
            <Route path="registration" element={<RegistrationForm/>}></Route>
            <Route path='entry' element={<SignInForm/>}></Route>
            <Route path="recovery" element={<RecoveryPassword/>}></Route>
          </Route>
          <Route path='average-agreement' element={<TariffAgreement name={'Average'}/>}></Route>
          <Route path='elevated-agreement' element={<TariffAgreement name={'Elevated'}/>}></Route>
          <Route path='upper-agreement' element={<TariffAgreement name={'Upper'}/>}></Route>
          <Route path='supreme-agreement' element={<TariffAgreement name={'Supreme'}/>}></Route>
          <Route path='crypto-currency' element={<CoinList />}></Route>
          <Route path='converter' element={<Converter/>}></Route>
          <Route path='crypto-news' element={<News/>}></Route>
          <Route path='crypto-graph' element={<CoinGraph/>}></Route>
          <Route path='user-agreement' element={<UserAgreement/>}></Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
