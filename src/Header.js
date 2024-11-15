import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div id="header">
      <h1 className="Header_title">slrklhiHOTEL</h1>
      <div className="header_menu_navbar">
        <ul className="nav_item">
          About
          <li className="dropdown">
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="nav_item">
          Roomview
          <li className="dropdown">
            <a href="#">Lesalonacces</a>
          </li>
          <li className="dropdown">
            <a href="#">Standard</a>
          </li>
          <li className="dropdown">
            <a href="#">ClubFlour</a>
          </li>
          <li className="dropdown">
            <a href="#">Sweet</a>
          </li>
        </ul>
        <ul className="nav_item">
          Special
          <li className="dropdown">
            <a href="#">Promotion</a>
          </li>
          <li className="dropdown">
            <a href="#">Event</a>
          </li>
          <li className="dropdown">
            <a href="#">BlackFirst</a>
          </li>
        </ul>
        <ul className="nav_item">
          Community
          <li className="dropdown">
            <a href="#">Notice</a>
          </li>
          <li className="dropdown">
            <a href="#">Q&A</a>
          </li>
        </ul>
      </div>
      <div className="header_item_menu">
        <a href="#">Menu</a>
      </div>
    </div>
  );
};

export default Header;