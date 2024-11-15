import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div id="HomeIntro">
       <div className="intro_hotel_logo">SlrklhiHotel</div>
      <video autoPlay loop muted>
        <source src='./videos/city fly view.mp4' type='video/mp4' />
       </video>
        <h1 className="intro_Slogan">Welcome to Slrklhi Hotel</h1>
        <p className="intro_description">Discover the best of slrklhi in a modern, stylish, and comfortable environment.</p>
       <div className="intro_menu_link">
        <a href="#">Menu</a></div>

      </div>
      
  )
}
  
   export  default Intro;