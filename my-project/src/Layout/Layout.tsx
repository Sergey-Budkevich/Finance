import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Main from "../pages/Main"


function Layout(){
    return(
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
}

export default Layout