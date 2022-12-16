import React, { useEffect } from 'react';
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
import News from './components/News';
import Balance from './components/Balance';
import BalanceAnalytics from './components/BalanceAnalytics';
import BalanceHistory from './components/BalanceHistory';
import Investments from './components/Investments';
import AppAbout from './components/AppAbout';
import Settings from './components/Settings';
import Refferals from './components/Refferals';
import RecoveryPassword from './components/RecoveryPassword';
import TariffAgreement from './components/TariffsAgreement';
import Сonfirmation from './components/Сonfirmation';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import NewRegistrationForm from './components/NewRegistrationForm';
import NewSignInForm from './components/NewSignInForm';
import {signIn } from './store/slices/UserSlice';
import Refill from './components/Refill';
import styled from 'styled-components';
import Agreement from './components/Agreement';

function App() {
  const dispatch = useAppDispatch();
const {accessToken} = useAppSelector(state => state.userInfo);

  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo') || null;
    if(userInfo){
      dispatch(signIn(JSON.parse(userInfo)))
      // console.log(JSON.parse(userInfo));
    }
  },[dispatch]);

  return (
    <div className="App" >
      {  !!accessToken ?
            <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<MainTitle>Добро пожаловать в Uroboros Club!</MainTitle>}></Route>
              <Route path='converter' element={<Converter/>}></Route>
              <Route path='FAQ' element={<AppQuestions/>}>
                <Route path='feedback' element={<FeedbackForm/>}></Route>
              </Route>
              <Route path='investments' element={<Investments/>}>
                <Route path='confirmation' element={<Сonfirmation nonConfirmAdress={'/investments'}/>}></Route>
              </Route>
              <Route path='average-agreement' element={<TariffAgreement name={'Average'}/>}></Route>
              <Route path='elevated-agreement' element={<TariffAgreement name={'Elevated'}/>}></Route>
              <Route path='upper-agreement' element={<TariffAgreement name={'Upper'}/>}></Route>
              <Route path='supreme-agreement' element={<TariffAgreement name={'Supreme'}/>}></Route>
              <Route path='balance' element={<Balance/>}>
                <Route path='analytics' element={<BalanceAnalytics/>}>
                  <Route path='refill' element={<Refill title={'Пополнение баланса'} placeholder={'Сумма пополнения'} btnText={'Пополнить'}/>}></Route>
                  <Route path='decrease' element={<Refill title={'Списание с баланса'} placeholder={'Сумма списания'} btnText={'Списать'}/>}></Route>
                </Route>
                <Route path='history' element={<BalanceHistory/>}></Route>
              </Route>
              <Route path='refferals' element={<Refferals/>}></Route>
              <Route path='refferars-info' element={<UserAgreement/>}></Route>
              <Route path='about' element={<AppAbout/>}></Route>
              <Route path='roadmap' element={<UserAgreement/>}></Route>
              <Route path='crypto-currency' element={<CoinList />}></Route>
              <Route path='crypto-graph' element={<CoinGraph/>}></Route>
              <Route path='settings' element={<Settings/>}></Route>
            </Route>
          </Routes> 
          :
          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Main/>}>
              <Route path="registration" element={<NewRegistrationForm/>}></Route>
              <Route path='entry' element={<NewSignInForm/>}></Route>
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
        </Routes>
    }
    </div>
  );
}

const MainTitle = styled.h1`
  margin-top: 20%;
  text-align: center;
  font-family: var(--first-font);
  font-weight: var(--font-weight-medium);
  font-size: var(--main-title-size);
  line-height: 60px;
  color: var(--color-white);
`

export default App;
