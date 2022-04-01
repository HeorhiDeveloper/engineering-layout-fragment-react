import React from 'react';
import s from './HeaderContent.module.css';
import imgOne from '../../images/01.png';
import imgTwo from '../../images/02.png';
import imgTree from '../../images/03.png';
import imgDownload from '../../images/download.svg';
import imgStamp from '../../images/stamp.png';
import imgMen from '../../images/men.png';


const HeaderContent = () => {
    return (
        <div className={s.HeaderContent}>
            <h1 className={s.h1One}>Независимое обследование зданий и сооружений</h1>
            <h3 className={s.h3One}>антенн, труб, теплосетей, канализаций и других объектов строительства</h3>
            <button className={s.btOne}><img src={imgDownload} alt="#"/><span>получить коммерческое</span></button>
            <h4 className={s.h4One}>Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер</h4>
            <div className={s.imgOne}>
                <img src={imgOne} alt="#" />
            </div>
            <h3 className={s.h301}>Начинаем работать без аванса</h3>
            <div className={s.imgTwo}>
                <img src={imgTwo} alt="#" />
            </div>
            <h3 className={s.h302}>Предоставляем отсрочку платежа</h3>
            <div className={s.imgTree}>
                <img src={imgTree} alt="#" />
            </div>
            <h3 className={s.h303}>Всегда называем справедливую цену</h3>
            <div className={s.imgStamp}>
                <img src={imgStamp} alt="#" />
            </div>
            <button className={s.btTwo}><img src={imgMen} alt="#" /></button>    
        </div>
    )
}

export default HeaderContent;