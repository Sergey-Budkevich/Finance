import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import SideBar from '../components/SideBar';
import { useAppDispatch } from '../hooks/hooks';
import { changeCurrentTariff } from '../store/slices/TariffSlice';
import "../styles/MainLayout.css"

function MainLayout() {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        const currentTariff = localStorage.getItem("currentTariff") || null;
        if(currentTariff){
            dispatch(changeCurrentTariff(currentTariff))
        }
    },[dispatch])

    return (
        <div className='info-container'>
            <SideBar/>
            <div className='info-block'>
                <AppHeader/>
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;