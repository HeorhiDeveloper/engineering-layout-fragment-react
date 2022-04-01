import React from 'react';
import s from './Slider.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../../../images/item.png';
// import image2 from '../../../images/item2.png';
import image3 from '../../../images/item3.png';
import image4 from '../../../images/item4.png';


const Slider = () => {
    return (
        <div className={s.slider}>
            <AliceCarousel disableButtonsControls autoPlayInterval="1000">
                <h4><img src={image1} alt="#" />Локатор арматуры “Profoscope”</h4>
                <h4><img src={image3} alt="#" />Прибор ультразвукового действия “ПУЛЬСАР-2”</h4>
                <h4><img src={image4} alt="#" />Измеритель прочности бетона “Молоток Шмидта”</h4>
                <h4><img src={image1} alt="#" />Локатор арматуры “Profoscope”</h4>
                <h4><img src={image3} alt="#" />Прибор ультразвукового действия “ПУЛЬСАР-2”</h4>
                <h4><img src={image4} alt="#" />Измеритель прочности бетона “Молоток Шмидта”</h4>
                <h4><img src={image1} alt="#" />Локатор арматуры “Profoscope”</h4>
                <h4><img src={image3} alt="#" />Прибор ультразвукового действия “ПУЛЬСАР-2”</h4>
                <h4><img src={image4} alt="#" />Измеритель прочности бетона “Молоток Шмидта”</h4>
            </AliceCarousel>
        </div>
    )

}

export default Slider;



// const Slider = () => {
//     return (
//         <div>
//             <AliceCarousel autoPlay autoPlayInterval="3000">
//                 <img src={image1} className={s.sliderimg} alt="#" />
//                 <img src={image2} className={s.sliderimg} alt="#" />
//                 <img src={image3} className={s.sliderimg} alt="#" />
//                 <img src={image4} className={s.sliderimg} alt="#" />
//             </AliceCarousel>
//         </div>
//     )

// }