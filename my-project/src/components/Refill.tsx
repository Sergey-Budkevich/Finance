import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { changeTransactionList } from '../store/slices/UserSlice';
import Button from './Button';
import { PopUpTitle } from './styled-components/fonts';
import { Flex, PopUp } from './styled-components/wrapper';
import moment from 'moment';

type PropsType = {
    title: 'Пополнение баланса' | 'Списание с баланса',
    placeholder: string,
    btnText: string,
}

function Refill({title, placeholder, btnText}:PropsType) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {balance} = useAppSelector(state => state.userInfo)
    const input:any = useRef();
    const [refillAmount,setRefillAmount] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    const operation = title === 'Пополнение баланса' ? 'пополнение' : 'списание';


    const changeHandler = () => {
        if(+refillAmount <= 0){
            setError(true)
        }else {
            dispatch(changeTransactionList(new Transaction(moment().format('l'),operation,+refillAmount,moment().format('LTS'))))
            navigate('/balance/analytics')
            setError(false)
        }
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === 'Enter'){
            changeHandler()
        }
    }

    useEffect(()=>{
        input.current.focus()
    },[])

    class Transaction{
        date: string;
        operation:"пополнение" | "списание";
        amount: number;
        currentBalance: number;
        time: string;

        constructor(d:string, o:"пополнение" | "списание", a:number, t: string){
            this.date = d;
            this.operation = o;
            this.amount = a;
            this.currentBalance = o === "пополнение" ? balance + a : balance - a;
            this.time = t;
        }
    }



    return (
        <CardWrapper tabIndex={0} onKeyDown={onKeyDown}>
            <PopUp zIndex={999} padding={'45px 50px 50px'}>
                <Flex flexDirection='column'>
                    <PopUpTitle>{title}</PopUpTitle>
                    <RefillForm>
                        <Flex flexDirection='column'>
                            <input ref={input} type='number' value={refillAmount} onChange={e => setRefillAmount(e.target.value)} placeholder={placeholder}></input>
                            { error && <ErrorMessage>Сумма введена некоректно</ErrorMessage> }
                            <Button onClick={()=> changeHandler() } className={'purple'} type={'button'}>{btnText}</Button>
                        </Flex>
                    </RefillForm>
                    <LinkWrapper>
                        <Link className='exit' to="/balance/analytics">x</Link>
                    </LinkWrapper>
                </Flex>
            </PopUp>
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #29246A;
        opacity: 0.3;
    }
`

const RefillForm = styled.div`
    width: 100%;
    margin-top: 35px;
    input {
        width: 100%;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        padding: 15px 25px;
        outline: none;
        ::placeholder{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #BDBDBD;
        }
    };
    button {
        margin-top: 40px;
        width: 100%;
        height: 45px;
    }
`

const LinkWrapper = styled.div`
    position: absolute;
    top:15px;
    right: 30px;
    .exit {
        color: black;
        font-size: 22px;
        font-weight: 900;
        :hover {
            color: red;
            scale: none;
        }
    }
`
const ErrorMessage = styled.p`
    color: red;
    font-weight: var(--font-weight-SemiBold);
`

export default Refill;