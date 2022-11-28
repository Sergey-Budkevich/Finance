import React from 'react';
import Content from './Content';
import Input from './Input';
import "../styles/Settings.css"
import InstagramIcon from './Icons/InstagramIcon';
import SocialInput from './SocialInput';
import TelegrammIcon from './Icons/TelegrammIcon';
import FacebookIcon from './Icons/FacebookIcon';
import VKIcon from './Icons/VKIcon';
import AddPhotoIcon from './Icons/AddPhotoIcon';
import Button from './Button';

function Settings() {
    return (
        <section className='settings'>
            <Content>
                <div className='settings_container'>
                    <form className='settings_form'>
                        <div className='settings_top-row'>
                            <div className='settings_image-block'>
                                <AddPhotoIcon/>
                            </div>
                            <h2 className='settings_user-name'>Иванов Иван</h2>
                        </div>
                        <div className="data-block">
                            <h3 className="data-block-title">Ваши данные</h3>
                            <div className="input-block">
                                <Input type={'text'} requared={true} placeholder={'Имя*'} classname={"first-name"}/>
                                <Input type={'text'} requared={false} placeholder={'Фамилия'} classname={"second-name"}/>
                            </div>
                        </div>
                        <div className="data-block">
                            <h3 className="data-block-title">Контакты</h3>
                            <div className="input-block">
                                <Input type={'email'} requared={true} placeholder={'Email*'} classname={"email"}/>
                                <Input type={'text'} requared={false} placeholder={'Сайт'} classname={"website"}/>
                            </div>
                        </div>
                        <div className="data-block">
                            <h3 className="data-block-title">Социальные сети</h3>
                            <div className="input-block">
                                <SocialInput image={<InstagramIcon />} name={'instagramm'} placeholder={'Введите адрес страницы'}/>
                                <SocialInput image={<TelegrammIcon/>} name={'instagramm'} placeholder={'Введите адрес страницы'}/>
                                <SocialInput image={<FacebookIcon/>} name={'instagramm'} placeholder={'Введите адрес страницы'}/>
                                <SocialInput image={<VKIcon/>} name={'instagramm'} placeholder={'Введите адрес страницы'}/>
                            </div>
                        </div>
                        <Button className={'purple'} type={'submit'}>Сохранить изменения</Button>
                    </form>
                </div>
            </Content>
        </section>
    );
}

export default Settings;