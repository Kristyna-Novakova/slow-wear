import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoSW from '../../img/logoSW.png';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoSW} alt="logo" />
        </div>
        <ul className="footer-text">
          <li>
            {' '}
            <Link to="/o-nas">O nás</Link>
          </li>
          <li>
            <Link to="/muj-ucet">Přihlášení</Link>
          </li>
          <div className="social-media">
            <a href="https://www.instagram.com/kristynan/" target="_blank">
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/kristyna.novakova.754/"
              target="_blank"
            >
              <BsFacebook />
            </a>
          </div>
        </ul>
      </div>
      <div className="footer-divider">
        <p>&copy; Slow Wear, Inc. 2023. We love our users.</p>
      </div>
    </footer>
  );
};
