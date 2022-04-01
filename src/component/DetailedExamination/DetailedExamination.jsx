import React from 'react';
import s from './DetailedExamination.module.css';
import Slider from './Slider/Slider';

const DetailedExamination = () => {
    return (
        <div>
            <div className={s.step}> 
                <p>шаг №2</p>
            </div>
            <h3 className={s.h3One}>Детальное инструментальное обследование</h3>
            <h4 className={s.h4One}>Мы понимаем насколько важны сроки и сколько может стоить день задержки. 
            Поэтому Вы никогда не услышите от нас слов “надо подождать пару дней, пока освободится арендное оборудование”
            - мы укомплектованы всем необходимым</h4>
            <Slider/>
        </div>
    ) 

}

export default DetailedExamination