import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../styles/Question.css"
import QuestionIsCloseIcon from "./Icons/QuestionIsCloseIcon";
import QuestionIsOpenIcon from "./Icons/QuestionIsOpenIcon";


type PropsType={
    title: string,
    children: string,
    id: string,
    app?: boolean
}

function Question( { title, children, id, app }:PropsType ){
const [isOpen,setIsOpen] = useState<boolean>(false)

    return(
    <div className="question-container" style={{borderBottom: app ? '1px solid #e0e0e0' : ''}}>
            <a className="question-btn" onClick={ () => setIsOpen(!isOpen) }>{ isOpen ? <QuestionIsOpenIcon/> : <QuestionIsCloseIcon/> }</a>
            {
                !isOpen ? 
                <div className="question-block">
                    <h3 className="question-title" style={{color: app ? 'var(--color-violet)' : ''}} >Вопрос {id}</h3>
                    
                </div> :
                <div className="question-description">
                    <h3 className="question-description-title" style={{color: app ? 'var(--color-black)' : ''}}>{ title }</h3>
                    <p className="question-description-text" style={{color: app ? 'var(--color-lightGray)' : ''}}>{ children }</p>
                </div>
            }
        </div>
        
    )
}


export default Question