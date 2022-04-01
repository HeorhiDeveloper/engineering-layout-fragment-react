import React from 'react';
import s from './DataProcessing.module.css';

import imgWorkers from '../../images/workers.png';

const DataProcessing = () => {
    return (
        <div>
            <div className={s.imgBg}>
                <div className={s.step}>
                    <p>шаг №3</p>
                </div>
                <h3 className={s.h3One}>Обработка полученных данных</h3>
                <h4 className={s.h4One}>Детальный отчет с результатами обследования
                Вы получите через 7 дней. И на его основании сможете определить судьбу объекта и прогнозировать затраты</h4>
                <h2 className={s.h2One}>Вы и Ваши архитекторы получаете:</h2>
                <ul className={s.list}>
                    <li>Мы оценим техническое состояние объекта и присвоим ему категорию</li>
                    <li>Объясним причины появления дефектов и повреждений в конструкциях</li>
                    <li>Сформируем техзадание на проектирование мероприятий по восстановлению, усилению или ремонту конструкций, оборудования и сетей</li>
                </ul>
            </div>
            <div className={s.imgWorkers}>
                <img src={imgWorkers} alt="#" />
            </div>
        </div>
    )
}

export default DataProcessing;