import React from 'react';
import s from './ContentWhyWe.module.css';

import imgTV from '../../images/tv.png';


const ContentWhyWe = () => {
    return (
        <div>
            <h2 className={s.h2One}>Мы работаем быстро <br/> и наши отчеты проходят согласование с первого раза</h2>
            <h3 className={s.h3One}>Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ</h3>
            <div className={s.imgTV}>
                <img src={imgTV} alt="#" />
            </div>
            <div className={s.imgBg}>
                <h2 className={s.h2Two}>Вы и Ваши архитекторы получаете:</h2>
                <ul className={s.list}>
                    <li>Отчет на который на 100% можно положиться</li>
                    <li>Экономию времени и прогнозируемость сроков</li>
                    <li>Предварительные результаты сразу на месте</li>
                </ul>
            </div>
        </div>
    )
}

export default ContentWhyWe