import React from 'react';
import s from './Header.module.css';
// import imgLogo from '../../images/logo.png';
import imgLogoCompany from '../../images/logocompany.png';
import imgMail from '../../images/email.svg';
import imgPhone from '../../images/phone.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoCompany}>
                <img src={imgLogoCompany} alt="#"/>
            </div>
            <h4 className={s.h4One}>Пишите нам на email</h4>
            <div className={s.mail}>
                <img src={imgMail} alt="#"/>
            </div>
            <a className={s.aOne} href="info@diagnistics.by">info@diagnistics.by</a>
            <div className={s.phone}>
                <img src={imgPhone} alt="#"/>
            </div>
            <h4 className={s.h4Two}>Есть вопросы? Звоните!</h4>
            <a className={s.aTwo} a href="tel:+375294564545" >+375 (29) 456-45-45</a>
        </div>
    )
}

export default Header;