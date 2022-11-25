import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import SideBar from '../components/SideBar';
import "../styles/MainLayout.css"

function MainLayout() {
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