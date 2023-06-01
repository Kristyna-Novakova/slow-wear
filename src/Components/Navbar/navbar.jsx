import React from 'react';
import './style.css';
import logoSW from '../../img/logoSW.png';
import shoppingCart from './img/shopping-cart.svg';
import personLogin from './img/person.svg';
import burgerMenu from './img/burger-menu.svg';

export const Navbar = () => {
  return (
    <header className="header-container">
      <div className="navbar">
        <div className="logo">
          <img src={logoSW} alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <img src={personLogin} alt="login" />
          </li>
          <li>
            <img src={shoppingCart} alt="shopping cart" />
          </li>
          <li>
            <img src={burgerMenu} alt="menu" />
          </li>
        </ul>
      </div>
    </header>
  );
};
