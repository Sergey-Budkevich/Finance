import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { authUser } from '../store/slices/UserSlice';
import "../styles/NewSignInForm.css"

function NewSignInForm() {
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    
    let [userEmail,setUserEmail] = useState<string>('');
    let [userPassword,setUserPassword] = useState<string>('');
    let [error,setError] = useState<boolean>(false)

    const signIn = () => {
        if(userEmail !== '' && userPassword !== ''){

            (async () => {
                let user = {
                    email: userEmail,
                    password: userPassword
                }
            
                const res = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .catch(error => {
                    console.error('Error:', error);
                })
            
                if(res){
                    dispatch(authUser(res))
                }
            })()
            navigate('/')
        } else {
            setError(!error)
        }
    }



    return (
        <div className='newsign-in-wrapper'>
            <div className='newsign-in'>
                <h2 className='title newsign-in_title'>Войти в личный кабинет</h2>
                <form className='newsign-in_form' action="">
                    <input type='email' placeholder='Эл.почта' className='input' value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                    <div className='form_password-block'>
                        <input type='password' placeholder='Пароль' className='input' value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
                        <Link to="/recovery">
                            Забыли пароль?
                        </Link>
                    </div>
                    <p style={error ? {display:'block'} : {display:'none'}} className='newsign_message'>Неверный адрес почты или пароль</p>
                    <button onClick={()=>signIn()} type='button' className='purple custom-btn'>Продолжить</button>
                </form>
                <h3 className='newsign-in_subtitle'>Нет аккаунта?
                    <Link to="/registration"> Зарегистрируйся</Link> и начни зарабатывать прямо сейчас!
                </h3>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default NewSignInForm;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
