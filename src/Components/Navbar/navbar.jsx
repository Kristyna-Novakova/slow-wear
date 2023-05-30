import React from 'react';
import './style.css';
import logoSW from '../../img/logoSW.png';
import shoppingCart from './img/shopping-cart.svg';
import personLogin from './img/person.svg';
import burgerMenu from './img/burger-menu.svg';

export const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logoSW} alt="logo" />
        </div>
        <div className="icons">
          <img src={personLogin} alt="login" />
          <img src={shoppingCart} alt="shopping cart" />
          <img src={burgerMenu} alt="menu" />
        </div>
      </div>
    </header>
  );
};
