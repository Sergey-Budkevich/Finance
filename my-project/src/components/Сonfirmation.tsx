import React from 'react';
import Button from './Button';
import "../styles/Сonfirmation.css"
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { changeCurrentTariff } from '../store/slices/UserSlice';

type PropsType = {
    nonConfirmAdress: string
}

function Сonfirmation({ nonConfirmAdress}:PropsType) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const {confirmTariff} = useAppSelector(state => state.userInfo)

    const confirmation = () => {
        dispatch(changeCurrentTariff(confirmTariff));
        navigate(nonConfirmAdress);
    }

    return (
        <div className='confirmation-wrapper'>
            <div className='confirmation'>
                <h2 className='title confirmation_title'>Вы уверены что хотите выбрать тариф "{confirmTariff}"?</h2>
                <div className='confirmation_buttons'>
                    <Button width={'120px'} onClick={ ()=>confirmation()} className={'orange'} type={'button'}>Да</Button>
                    <Button width={'120px'} onClick={()=>navigate(nonConfirmAdress)} className={'purple'} type={'button'}>Нет</Button>
                </div>
                <button type='button' className='non-confimr-btn' onClick={()=>navigate(nonConfirmAdress)}>x</button>
            </div>
        </div>
    );
}

export default Сonfirmation;