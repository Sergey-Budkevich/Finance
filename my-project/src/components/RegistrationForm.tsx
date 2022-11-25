import React from 'react';
import Input from './Input';
import "../styles/RegistrationForm.css"
import { Link } from 'react-router-dom';
import Button from './Button';


// cранвнение паролей

function RegistrationForm() {
    return (
        <div className='registration-wrapper'>
            <div className='registration'>
                <h2 className='title registration_title'>Регистрация</h2>
                <form className='registration_form' action="http://localhost:5000/registration">
                    <Input classname='email-input' name='email' type="email"  placeholder="Email" requared={true}></Input>
                    <Input type="tel" name='tel' requared={false} placeholder="Телефон" classname="tel-input"></Input>
                    <Input type="password" name='password' requared={true} placeholder="Создайте пароль" classname="password-input"></Input>
                    <Input type="password" name='password' requared={true} placeholder="Повторите пароль" classname="password-input"></Input>
                    <Button className="purple" type="submit" >Зарегистрироваться</Button>
                </form>
                <div className='auth-block'>
                    Уже есть аккаунт?
                    <Link to="/entry"> Войти</Link>
                </div>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default RegistrationForm;