import React from 'react';
import './style.css';
import logoSW from '../../img/logoSW.png';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoSW} alt="logo" />
        </div>
        <div className="footer-text">
          <h3>O nás</h3>
          <h3>Registrace</h3>
          <h3>Help Desk</h3>
          <div className="social-media">
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <p>&copy; Slow Wear, Inc. 2023. We love our users.</p>
      </div>
    </footer>
  );
};
