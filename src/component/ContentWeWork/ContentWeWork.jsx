import React from 'react';
import s from './ContentWeWork.module.css';

import imgHenry from '../../images/henry.png';
import imgIconMen from '../../images/iconmen.png';

const ContentWeWork = () => {
    return (
        <div>
            <div className={s.imgHenry}>
                <img src={imgHenry} alt="#" />
            </div>
            <div className={s.imgBg}>
                <div className={s.step}> 
                   <p>шаг №1</p>
                </div>
                <h3 className={s.h3One}>Подготовительные работы</h3>
                <h4 className={s.h4One}>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.</h4>
                <div className={s.imgIconMen}> 
                    <img src={imgIconMen} alt="#" />
                </div>
                <p className={s.pOne}>“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“</p>
                <h4 className={s.h4Two}>Алексей, обследователь и главный инженер проектов</h4>
            </div>
        </div>
    )
}

export default ContentWeWork