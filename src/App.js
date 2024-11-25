import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Intro from './Intro';
import Footer from'./Footer';
// import IntroSwiper from './IntroSwiper';
import 'swiper/css'; // 스와이퍼 @11.1.15버젼   7+버젼과 css임포트경로가 다름
import ErrorBoundary from './ErrorBoundary'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './Header';
import MenuLink from './MenuLink';
import About from './About';
import RoomView from './RoomView';
import Reservation from './Reservation';
import Community from './Community';
import Special from './Special';




const App = () => {
  return (
    <div>
        
      <Header/>
      {/* <IntroSwiper/> */}
      <BrowserRouter>
      <ErrorBoundary>
      
      {/* 라우트 정의 */}
      <Routes>
           <Route path="/menu" element={<MenuLink />} />
            <Route path="/About" element={<About />} />
            <Route path="/Roomview" element={<RoomView />} />
            <Route path="/Special" element={<Special />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Community" element={<Community />} />
            {/* 404 페이지를 처리하기 위한 기본 경로 */}
            {/* <Route path="*" element={<div>404 Page Not Found</div>} /> */}
            {/* <Route path="#slide1" element={IntroSwiper /} /> */}
          </Routes>
      </ErrorBoundary>
      </BrowserRouter>
      <Footer/> 
    </div>
  );
};


export default App;
