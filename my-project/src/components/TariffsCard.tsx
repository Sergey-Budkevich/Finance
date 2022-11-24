import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import '../styles/TariffsCard.css'
import CheckMark from "./Icons/CheckMark";

type PropsType = {
    title: string,
    percent: string,
    color: string,
    
}

function TariffsCard(  { title,percent,color }:PropsType ){
    return(
        <div className="card">
            <div className="card-header" style={ { background: color }}>
                <h3 className="card-title">{ title }</h3>
            </div>
            <div className="card-body">
                <p className="card-price"><span style={ percent.length > 5 ? { fontSize: '22px', lineHeight: '25px'} : {}}>{ percent }</span>в день</p>
                <div className="card-link">
                    <Link to={`${title}-agreement`}>
                        Полные условия <CheckMark/>
                    </Link>
                </div>
                <Button className="dark" type="button">Выбрать</Button>
            </div>
        </div>
    )
}

export default TariffsCard