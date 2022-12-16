import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Intro from "../components/Intro";
import Questions from "../components/Questions";
import Tariffs from "../components/Tariffs";
import Participation from "../components/Participation";
import About from "../components/About";
import Agreement from "../components/Agreement";



function Main(){
    return (
        <div style={{position: 'relative'}}>
            <Intro />
            <Participation />
            <Tariffs />
            <Questions/>
            <About/>
            <Agreement/>
            <Outlet/>
        </div>
    )
}

export default Main