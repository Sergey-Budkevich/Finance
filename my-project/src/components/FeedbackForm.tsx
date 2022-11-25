import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import "../styles/FeedbackForm.css"

function FeedbackForm() {
    return (
        <div className='feedback-wrapper'>
            <div className='feedback'>
                <h2 className='title feedback_title'>Свяжитесь с нами</h2>
                <form className='feedback_form' action="http://localhost:5000/registration">
                    <Input type={'email'} name='email' requared={true} placeholder={'Email'} classname={'email-input'}/>
                    <Input type={'text'} requared={false} placeholder={'Введите ваше сообщение'} classname={'message-input'}/>
                    <Button className="purple" type="submit" >Отправить</Button>
                </form>
                <Link to="/FAQ">x</Link>
            </div>
        </div>
    );
}

export default FeedbackForm;