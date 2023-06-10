import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoSW from '../../img/logoSW.png';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { useShoppingCart } from '../../lib/store';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalAmount = useShoppingCart(
    (shoppingCart) => shoppingCart.cartItems.length,
  );

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
              <Link to="/kosik" className="cart-container">
                <HiOutlineShoppingBag />
                {totalAmount > 0 && <div className="badge">{totalAmount}</div>}
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
