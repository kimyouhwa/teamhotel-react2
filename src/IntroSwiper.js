import React from 'react';
import 'swiper/css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IntroSwiper.css';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import {Link }  from "react-router-dom";


const IntroSwiper = () => (
  <div style={{ height: '100vh', width: '100%' }}>

     {/* 햄버거 메뉴 */}
     <div className="hamburger-menu">
      <div className="hamburger-bar">
        <Link to="#slide1"></Link> {/* Link로 변경 */}
      </div>
      <div className="hamburger-bar">
        <Link to="#slide2"></Link> {/* Reservation으로 변경 */}
      </div>
      <div className="hamburger-bar">
        <Link to="#slide3"></Link> {/* About Us 링크 추가 */}
      </div>
      <div className="hamburger-bar">
        <Link to="#slide4"></Link> {/* Room View 링크 추가 */}
      </div>
      {/* <div className="hamburger-bar">
        <Link to="#slide5"></Link> {/* Special Offers 링크 추가 
      </div> */}
    </div>

    {/* 고정되는 내용 */}
    <div className="fixed-elements">
      <div className="intro_hotel_logo logo2">SlrklhiHotel</div>
      <div className="intro_menu_link link2">
      <Link to="/menu">: Menu</Link></div>
        <div className='Reservation_link'>
        <Link to="/reservation">Reservation</Link> </div>
    </div>

     {/* swiper */}
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      loop
      mousewheel={true}
      modules={[Navigation, Pagination, Mousewheel]}
      style={{ height: '100vh', width: '100%' }}

    >{/* 1_slide */}
      <SwiperSlide id="slide1">
        <div id="HomeIntro">
        <video autoPlay muted loop
           >
          <source src="/videos/city fly view.mp4" type="video/mp4" />
        </video>
        <h1 className="intro_Slogan">Welcome to Slrklhi Hotel</h1>
        <p className="intro_description">Discover the best of slrklhi in a modern, stylish, and comfortable environment.</p>
   
      </div>
      </SwiperSlide>

      {/* 2_slide */}
      <SwiperSlide id="slide2">
      <div id="HomeIntro ">
      
        <video
          autoPlay muted loop
          >
          <source src="/videos/city inside1.mp4" type="video/mp4" />
        </video>
        <h1 className="intro_Slogan2">Modern Comforts, Natural Escapes</h1>
        <p className="intro_description2">Discove the best of slrklhi in a modern,<br/> stylish, and comfortable environment.<br/>loremof slrklhi in a modern,stylish, and comfortable </p>
      
      </div>
      </SwiperSlide>
      {/* 3_slide */}
      <SwiperSlide id="slide3">
      <div id="HomeIntro">
      
        <video
          autoPlay muted loop
          >
          <source src="/videos/city lettering view.mp4" type="video/mp4" />
        </video>
        {/* <h1 className="intro_Slogan3">Awrard style and comfort</h1> */}
        <p className="intro_description3">Discover the best of slrklhi in a modern, stylish, and comfortable environment.
          lorem ipsum <br/> dolor sit amet, consectetur adipiscing elit. Sed vel metus id risus suscipit<br/> pulvinar. Sed sodales neque non arcu laoreet, at interdum <br/>urna facilisis. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla <br/>facilisi. Nulla facilisi. Nulla facilisi. Nulla 
        </p>
    
       </div>
      </SwiperSlide>

      {/* 4_slide */}
      <SwiperSlide id="slide4">
      <div id="HomeIntro logo4">
        <video
          autoPlay muted loop
          >
          <source src="/videos/city night2.mp4" type="video/mp4" />
        </video>
        <h1 className="intro_Slogan4">Urban Sophistication, Coastal Tranquility</h1>
        <p className="intro_description4">Discover the best of slrklhi in a modern, stylish, and comfortable environment.</p>
     
      </div>
      </SwiperSlide>
    </Swiper>
  </div>
);


export default IntroSwiper;