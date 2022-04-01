import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
    return (
        <div className={s.footer}>
           <div className={s.divOne}>
               <h4>2016-2019 ООО "Инженерная Диагностика" Все права защищены. Бренд упакован Digital Butlers</h4>
           </div>
           <div className={s.divTwo}>
               <h4>Пишите нам на email</h4>
               <a href="info@diagnistics.by">info@diagnistics.by</a>
           </div>
           <div className={s.divTree}>
                <h4>Есть вопросы? Звоните!</h4>
                <a href="tel:+375294564545" >+375 (29) 456-45-45</a>
           </div>
           <div className={s.divFour}>
                <h4>Заходите в гости</h4>
                <a href="https://yandex.by/maps/157/minsk/house/Zk4YcwFgS0MPQFtpfXVxcX1kZg==/?ll=27.560268%2C53.900173&z=17">г. Минск, ул. Ленина, д.9, пом.3, оф.10</a>
            </div>
        </div>
    )
}

export default Footer;