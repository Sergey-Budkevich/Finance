import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import "../styles/FeedbackForm.css"
import { useAppSelector } from '../hooks/hooks';

function FeedbackForm() {
    const input = useRef<HTMLInputElement>(null)

        useEffect(()=>{
        if(input.current) {
            input.current.focus()
        }
    },[])
    
    const { accessToken } = useAppSelector(state => state.userInfo);
    const navigate = useNavigate();
    const onClick = () => {
        accessToken ? navigate('/FAQ') : navigate('/')
    }
    return (
        <div className='feedback-wrapper'>
            <div className='feedback'>
                <h2 className='title feedback_title'>Свяжитесь с нами</h2>
                <div className='feedback_form' >
                    <Input refElement={input} type={'email'} name='email' requared={true} placeholder={'Email'} classname={'email-input'}/>
                    <Input type={'text'} requared={false} placeholder={'Введите ваше сообщение'} classname={'message-input'}/>
                    <Button onClick={()=>onClick()} className="purple" type="submit" >Отправить</Button>
                </div>
        
                <Link to={accessToken ? '/FAQ' : '/'}>x</Link>
            </div>
        </div>
    );
}

export default FeedbackForm;