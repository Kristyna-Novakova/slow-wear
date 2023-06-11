import React from 'react';
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
          <li>O nás</li>
          <li>Registrace</li>
          <li>Help Desk</li>
          <div className="social-media">
            <BsInstagram />
            <BsFacebook />
          </div>
        </ul>
      </div>
      <div className="footer-divider">
        <p>&copy; Slow Wear, Inc. 2023. We love our users.</p>
      </div>
    </footer>
  );
};
