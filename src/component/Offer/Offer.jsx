import React from 'react';
import s from './Offer.module.css';

import imgDownload from '../../images/download.svg';


const Offer = () => {
    return (
        <div className={s.offer}>
            <div className={s.divOne}>
                <h2>Закажите комплексное обследование и получите тепловизионную съемку <br/><span> в подарок</span></h2>
            </div>
            <div className={s.divTwo}>
                <h3>Мы первая в Беларуси компания в составе которой есть аккредитованная тепловизионная лаборатория.<br/> 
                    <br/>Наши аттестованные термографисты найдут утечки тепла, определят скрытые дефекты конструкции и подберут систему утепления, которую выдержат стены.</h3>
            </div>
            <div className={s.divTree}>
                <button className={s.btOne}><img src={imgDownload} alt="#"/><span>получить коммерческое</span></button>
                <h4>Отправьте техзадание и получите коммерческое предложение в течении 15 минут</h4>
            </div>
        </div>
    )
}

export default Offer;