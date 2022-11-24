import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../styles/SignInForm.css"
import Button from './Button';
import Input from './Input';


function SignInForm() {
    return (
        <div className='sign-in-wrapper'>
            <div className='sign-in'>
                <h2 className='title sign-in_title'>Войти в личный кабинет</h2>
                <form className='sign-in_form' action="">
                    <Input type="text" requared={true} placeholder="Email" classname="user-email"></Input>
                    <div className='form_password-block'>
                        <Input type="password" requared={true} placeholder="Пароль" classname="user-password"></Input>
                        <Link to="/recovery">
                            Забыли пароль?
                        </Link>
                    </div>
                    <Button className="purple" type="submit">Продолжить</Button>
                </form>
                <h3 className='sign-in_subtitle'>Нет аккаунта?
                    <Link to="/registration"> Зарегистрируйся</Link> и начни зарабатывать прямо сейчас!
                </h3>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default SignInForm;