import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { changeTransactionList } from '../store/slices/UserSlice';
import Button from './Button';
import Input from './Input';
import { PopUpTitle } from './styled-components/fonts';
import { Card, CardWrapper, Flex } from './styled-components/wrapper';


function Refill() {

    const {balance} = useAppSelector(state => state.userInfo)

    class Transaction{
        date: string;
        operation:"пополнение" | "списание";
        amount: number;
        currentBalance: number;

        constructor(d:string, o:"пополнение" | "списание", a:number){
            this.date = d;
            this.operation = o;
            this.amount = a;
            this.currentBalance = o === "пополнение" ? balance + a : balance - a;
        }
    }

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [refillAmount,setRefillAmount] = useState<string>('')
    

    const changeHandler = () => {
        dispatch(changeTransactionList(new Transaction(new Date().toLocaleString(),'пополнение',+refillAmount)))
        navigate('/balance/analytics')
        
    }

    return (
        <CardWrapper>
            <Card zIndex={999} padding={'45px 50px 50px'}>
                <Flex flexDirection='column'>
                    <PopUpTitle>Пополнение баланса</PopUpTitle>
                    <RefillForm>
                        <Flex flexDirection='column'>
                            <input type='number' value={refillAmount} onChange={e => setRefillAmount(e.target.value)} placeholder={'Сумма пополнения'}></input>
                            <Button onClick={()=> changeHandler() } className={'purple'} type={'button'}>Пополнить</Button>
                        </Flex>
                    </RefillForm>
                    <LinkWrapper>
                        <Link className='exit' to="/balance/analytics">x</Link>
                    </LinkWrapper>
                </Flex>
            </Card>
        </CardWrapper>
    );
}

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

export default Refill;