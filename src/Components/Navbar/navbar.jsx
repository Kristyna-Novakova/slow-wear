import React, { useState } from 'react';
import './style.css';
import logoSW from '../../img/logoSW.png';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="navbar">
        <div className="logo">
          <img src={logoSW} alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <BsPerson />
          </li>
          <li>
            <HiOutlineShoppingBag />
          </li>
          <li className={`hamburger-menu`} onClick={handleMenuToggle}>
            {isMenuOpen ? <RxCross1 /> : <AiOutlineMenu />}
          </li>
        </ul>
        {isMenuOpen && <HamburgerMenu />}
      </div>
    </header>
  );
};
