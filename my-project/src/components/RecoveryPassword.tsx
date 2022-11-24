import React from 'react';
import Button from './Button';
import Input from './Input';
import "../styles/RecoveryPassword.css"
import { Link } from 'react-router-dom';

function RecoveryPassword() {
    return (
        <div className='recovery-wrapper'>
            <div className='recovery'>
                <h2 className='title recovery_title'>Забыли пароль?</h2>
                <form action="" className='recovery_form'>
                    <Input type="email" requared={true} placeholder="Email" classname="email-input"></Input>
                    <Button className="purple" type="submit" >Восстановить пароль</Button>
                </form>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default RecoveryPassword;