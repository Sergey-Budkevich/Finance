import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import '../styles/TariffsCard.css'
import CheckMark from "./Icons/CheckMark";
import { useAppDispatch } from "../hooks/hooks";
import { confirmTariff } from "../store/slices/UserSlice";

type PropsType = {
    title: "average" | "elevated" | "upper" | "supreme",
    percent: string,
    color: string,
    disabled?: true | false,
    
}

function TariffsCard(  { title,percent,color, disabled }:PropsType ){

    const dispatch = useAppDispatch()

    return(
        <div className="card">
            <div className="card-header" style={ { background: color }}>
                <h3 className="card-title">{ title }</h3>
            </div>
            <div className="card-body">
                <p className="card-price"><span style={ percent.length > 5 ? { fontSize: '22px', lineHeight: '25px'} : {}}>{ percent }</span>в день</p>
                <div className="card-link">
                    <Link to={`/${title}-agreement`}>
                        Полные условия <CheckMark/>
                    </Link>
                </div>
                <Link to="confirmation" className="card-confirm-link">
                    <Button disabled={disabled} className="dark" type="button" onClick={() => dispatch(confirmTariff(title))} >Выбрать</Button>
                </Link>
            </div>
        </div>
    )
}

export default TariffsCard
