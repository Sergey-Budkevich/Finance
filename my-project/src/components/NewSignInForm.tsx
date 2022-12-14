import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { authUser } from '../store/slices/UserSlice';
import "../styles/NewSignInForm.css"
import CustomLink from './base/CustomLink';
import Button from './Button';

function NewSignInForm() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    let [userEmail,setUserEmail] = useState<string>('');
    let [userPassword,setUserPassword] = useState<string>('');
    let [error,setError] = useState<boolean>(false);
    let [authError,setAuthError] = useState<boolean>(false)


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
                    dispatch(authUser(res));
                    setAuthError(false);
                    setError(false);
                    navigate('/');
                    
                }else{
                    setAuthError(true);
                    setError(false);

                }
            })()
        } else {
            setError(true);
            setAuthError(false);
        }
    }
console.log(authError);

    const input = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(input.current) {
            input.current.focus()
        }
    },[])

    return (
        <div className='newsign-in-wrapper'>
            <div className='newsign-in'>
                <h2 className='title newsign-in_title'>?????????? ?? ???????????? ??????????????</h2>
                <form className='newsign-in_form' action="">
                    <input ref={input} type='email' placeholder='????.??????????' className='input' value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                    <div className='form_password-block'>
                        <input type='password' placeholder='????????????' className='input' value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
                        <CustomLink to="/recovery">
                            ???????????? ?????????????
                        </CustomLink>
                    </div>
                    <p style={error || authError ? {display:'block'} : {display:'none'}} className='newsign_message'>
                        { error ? '???????????????? ?????????? ?????????? ?????? ????????????' : authError ? '???????????? ???????????????????????? ???? ????????????????????' : ''}
                    </p>
                    <Button onClick={()=>signIn()} type='button' className='purple'>????????????????????</Button>
                </form>
                <h3 className='newsign-in_subtitle'>?????? ?????????????????
                    <Link to="/registration"> ??????????????????????????????</Link> ?? ?????????? ???????????????????????? ?????????? ????????????!
                </h3>
                <Link to="/">x</Link>
            </div>
        </div>
    );
}

export default NewSignInForm;