import React from 'react';
import s from './ContentServices.module.css';

import imgOne from '../../images/imageOne.png';
import imgTwo from '../../images/imageTwo.png';
import imgTree from '../../images/imageTree.png';

import imgArrow from '../../images/arrowCollection.svg';


const ContentServices = () => {
    return (
        <div>
            <h2 className={s.h2One}>Услуги</h2>
            <h3 className={s.h3One}>Выполняем как комплексное обследование, так и отдельные виды работ</h3>

            <div className={s.collection}>
                <div className={s.item}>
                    <img src={imgOne} alt="#"/>
                    <h3 className={s.h3ItemOne}>Общее обследование</h3>
                    <h4 className={s.h4ItemOne}>Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.</h4>
                    <div className={s.detail}>
                        <a className={s.aItemOne} href="#" >Подробнее</a>
                        <img src={imgArrow} alt="#"/>
                    </div>
                </div>
                <div className={s.item}>
                    <img src={imgTwo} alt="#"/>
                    <h3 className={s.h3ItemOne}>Тепловизионная съемка</h3>
                    <h4 className={s.h4ItemOne}>Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания</h4>
                    <div className={s.detail}>
                        <a className={s.aItemOne} href="#" >Подробнее</a>
                        <img src={imgArrow} alt="#"/>
                    </div>
                </div>
                <div className={s.item}>
                    <img src={imgTree} alt="#"/>
                    <h3 className={s.h3ItemOne}>Телеинспекция инженерных сетей</h3>
                    <h4 className={s.h4ItemOne}>Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров</h4>
                    <div className={s.detail}>
                        <a className={s.aItemOne} href="#" >Подробнее</a>
                        <img src={imgArrow} alt="#"/>
                    </div>
                </div>
                <div className={s.item}>
                    <img src={imgOne} alt="#"/>
                    <h3 className={s.h3ItemOne}>Общее обследование</h3>
                    <h4 className={s.h4ItemOne}>Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.</h4>
                    <div className={s.detail}>
                        <a className={s.aItemOne} href="#" >Подробнее</a>
                        <img src={imgArrow} alt="#"/>
                    </div>
                </div>
                <div className={s.item}>
                    <img src={imgTwo} alt="#"/>
                    <h3 className={s.h3ItemOne}>Тепловизионная съемка</h3>
                    <h4 className={s.h4ItemOne}>Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания</h4>
                    <div className={s.detail}>
                        <a className={s.aItemOne} href="#" >Подробнее</a>
                        <img src={imgArrow} alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentServices;