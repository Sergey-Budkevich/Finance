import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../components/Intro";
import Questions from "../components/Questions";
import Tariffs from "../components/Tariffs";
import Participation from "../components/Participation";
import About from "../components/About";
import Agreement from "../components/Agreement";



function Main(){
    return (
        <>
            <Intro />
            <Participation />
            <Tariffs/>
            <Questions/>
            <About/>
            <Agreement/>
        </>
    )
}


export default Main