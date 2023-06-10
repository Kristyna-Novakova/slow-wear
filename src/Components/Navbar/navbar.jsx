import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoSW from '../../img/logoSW.png';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isMenuOpen) {
      window.addEventListener('click', () => setIsMenuOpen(false), {
        once: true,
      });
    }

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logoSW} alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <BsPerson />
            </li>
            <li>
              <Link to="/kosik">
                <HiOutlineShoppingBag />
              </Link>
            </li>
            <li className={`hamburger-menu`} onClick={handleMenuToggle}>
              {isMenuOpen ? <RxCross1 /> : <AiOutlineMenu />}
            </li>
          </ul>
        </div>
        {isMenuOpen && <HamburgerMenu />}
      </header>
    </>
  );
};
