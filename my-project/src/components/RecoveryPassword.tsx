import React, { useEffect, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import "../styles/RecoveryPassword.css"
import { Link, useNavigate } from 'react-router-dom';

function RecoveryPassword() {
    const navigate = useNavigate()
    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.key === 'Enter' && navigate('/')
    }

    const input = useRef<HTMLInputElement>(null)
    useEffect(()=>{
    if(input.current) {
        input.current.focus()
    }
},[])
    return (
        <div className='recovery-wrapper' tabIndex={0} onKeyDown={onKeyDown}>
            <div className='recovery'>
                <h2 className='title recovery_title'>Забыли пароль?</h2>
                <form action="" className='recovery_form'>
                    <Input refElement={input} type="email" requared={true} placeholder="Email" classname="email-input"></Input>
                    <Button className="purple" type="submit" >Восстановить пароль</Button>
                </form>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default RecoveryPassword;