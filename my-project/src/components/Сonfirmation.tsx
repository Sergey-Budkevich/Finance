import React from 'react';
import Button from './Button';
import "../styles/Сonfirmation.css"
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

type PropsType = {
    confirm: any,
    nonConfirm: string
}

function Сonfirmation({confirm, nonConfirm}:PropsType) {

    const navigate = useNavigate();
    const {confirmTariff} = useAppSelector(state => state.userInfo)

    function confirmation(fn: () => void){
        fn();
        navigate(nonConfirm)
    }

    return (
        <div className='confirmation-wrapper'>
            <div className='confirmation'>
                <h2 className='title confirmation_title'>Вы уверены что хотите выбрать тариф "{confirmTariff}"?</h2>
                <div className='confirmation_buttons'>
                    <Button onClick={ ()=>confirmation(confirm)} className={'orange'} type={'button'}>Да</Button>
                    <Button onClick={()=>navigate(nonConfirm)} className={'purple'} type={'button'}>Нет</Button>
                </div>
                <button type='button' className='non-confimr-btn' onClick={()=>navigate(nonConfirm)}>x</button>
            </div>
        </div>
    );
}

export default Сonfirmation;