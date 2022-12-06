import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/NewRegistrationForm.css"

function NewRegistrationForm() {
    const navigate = useNavigate();
    let [userEmail,setUserEmail] = useState<string>('');
    let [userPassword,setUserPassword] = useState<string>('');
    let [secondUserPassword, setSecondUserPassword] = useState<string>('');

    let [error,setError] = useState<boolean>(false)

    const registration = () => {
        if(userPassword === secondUserPassword && userEmail !== '' && userPassword !== ''){

            (async () => {
                    let user = {
                        email: userEmail,
                        password: userPassword
                    };
                    await fetch('http://localhost:5000/api/registration', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(user)
                    });
                })()

            navigate('/')

        } else {
            setError(!error)
        }
    }

    return (
        <div className='newregistration-wrapper'>
        <div className='newregistration'>
            <h2 className='title newregistration_title'>Регистрация</h2>
                <div className='newregistration_form'>
                    <input className='input' type="email" placeholder='Введите адрес эл.почты' value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                    <input className='input' type="password" placeholder='Создайте пароль' value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
                    <input className='input' placeholder='Повторите пароль' type="password" value={secondUserPassword} onChange={e => setSecondUserPassword(e.target.value)}/>
                    <p style={error ? {display:'block'} : {display:'none'}} className='newregistration_message'>Данные введены не корректно</p>
                    <button onClick={()=>registration()} className='purple custom-btn' type='button'>Зарегистрироваться</button>
                </div>

            <div className='auth-block'>
                Уже есть аккаунт?
                <Link to="/entry"> Войти</Link>
            </div>
            <Link to="/">x</Link>
        </div>
    </div>
    );
}

export default NewRegistrationForm;