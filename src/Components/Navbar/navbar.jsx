import React from 'react';
import './style.css';
import logoSW from '../../img/logoSW.png';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const Navbar = () => {
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
          <li>
            <AiOutlineMenu />
          </li>
        </ul>
      </div>
    </header>
  );
};
