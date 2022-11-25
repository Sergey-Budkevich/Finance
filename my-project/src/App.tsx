import React, { useEffect, useState } from 'react';
import CoinList from './components/СoinList';
import Converter from './components/Converter';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import CoinGraph from './components/CoinGraph';
import UserAgreement from './components/UserAgreement';
import RegistrationForm from './components/RegistrationForm';
import AverageAgreement from './components/AverageAgreement';
import SignInForm from './components/SignInForm';
import RecoveryPassword from './components/RecoveryPassword';
import MainLayout from './Layout/MainLayout';
import AppQuestions from './components/AppQuestions';
import FeedbackForm from './components/FeedbackForm';
import Intro from './components/Intro';
import News from './components/News';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* вопрос по вложенности фидбека */}
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<h1 className='main-title'>Добро пожаловать в Uroboros Club!</h1>}></Route>
          <Route path='crypto-currency' element={<CoinList />}></Route>
          <Route path='FAQ' element={<AppQuestions/>}>
            <Route path='feedback' element={<FeedbackForm/>}></Route>
          </Route>
        </Route>
      </Routes>
      {/* <Routes>
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
      </Routes> */}
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