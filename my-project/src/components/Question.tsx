import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../styles/Question.css"
import QuestionIsCloseIcon from "./Icons/QuestionIsCloseIcon";
import QuestionIsOpenIcon from "./Icons/QuestionIsOpenIcon";


type PropsType={
    title: string,
    children: string,
    id: string
}

function Question( { title, children, id }:PropsType ){
const [isOpen,setIsOpen] = useState<boolean>(false)

    return(
        <div className="question-container">
            <a className="question-btn" onClick={ () => setIsOpen(!isOpen) }>{ isOpen ? <QuestionIsOpenIcon/> : <QuestionIsCloseIcon/> }</a>
            {
                !isOpen ? 
                <div className="question-block">
                    <h3 className="question-title">Вопрос {id}</h3>
                    
                </div> :
                <div className="question-description">
                    <h3 className="question-description-title">{ title }</h3>
                    <p className="question-description-text">{ children }</p>
                </div>
            }
        </div>
        
    )
}


export default Question