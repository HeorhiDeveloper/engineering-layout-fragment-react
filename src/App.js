import React from 'react';
import './App.css';
import city from './images/city.png';
import services from './images/services.png';
import offer from './images/offer.png';

import Header from './component/Header/Header.jsx';
import HeaderContent from './component/HeaderContent/HeaderContent';
import ContentWhyWe from './component/ContentWhyWe/ContentWhyWe.jsx';
import ContentServices from './component/ContentServices/ContentServices.jsx';
import ContentHeaderWeWork from './component/ContentHeaderWeWork/ContentHeaderWeWork.jsx';
import ContentWeWork from './component/ContentWeWork/ContentWeWork.jsx';
import DetailedExamination from './component/DetailedExamination/DetailedExamination.jsx';
import DataProcessing from './component/DataProcessing/DataProcessing';
import Offer from './component/Offer/Offer';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
       <div className='sectionOne'>
         <img src={city} alt="#"/>
         <Header/>
         <HeaderContent/>
       </div>
       <div className='sectionTwo'>
         <ContentWhyWe/>
       </div>
       <div className='sectionTree'>
          <img src={services} alt="#"/>
         <ContentServices/>
       </div>
       <div className='sectionFour'>
          <ContentHeaderWeWork/>
       </div>
       <div className='sectionFive'>
         <ContentWeWork/>
       </div>
       <div className='sectionSix'>
          <DetailedExamination/>
       </div>
       <div className='sectionSeven'>
          <DataProcessing/>
       </div>
       <div className='sectionEight'>
       <img src={offer} alt="#"/>
          <Offer/>
       </div>
       <div className='sectionNine'>
          <Footer/>
       </div>
    </div>
  );
}

export default App;
