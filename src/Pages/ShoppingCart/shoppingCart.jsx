import React from 'react';
import './style.css';
import { Button } from '../../Components/Button/Button';

export const ShoppingCart = () => {
  return (
    <section className="section">
      <div className="cart-section">
        <h2 className="cart-title">Nákupní košík</h2>

        <div className="cart-items">
          <div className="item-image">
            <img src="img/top1.png" alt="Produkt 1" />
          </div>
          <div className="item-details">
            <h3 className="item-name">Tričko s potiskem</h3>
            <p className="item-size">Velikost: M</p>
            <p className="item-quantity">Množství: 2</p>
            <p className="item-price">Cena: 200 CZK</p>
            <button className="remove-button">Odebrat</button>
          </div>
        </div>

        <div className="cart-items">
          <div className="item-image">
            <img src="img/top1.png" alt="Produkt 1" />
          </div>
          <div className="item-details">
            <h3 className="item-name">Tričko s potiskem</h3>
            <p className="item-size">Velikost: M</p>
            <p className="item-quantity">Množství: 2</p>
            <p className="item-price">Cena: 200 CZK</p>
            <button className="remove-button">Odebrat</button>
          </div>
        </div>

        <div className="cart-summary">
          <h3 className="summary-title">Souhrn objednávky</h3>
          <p className="summary-total">Celková cena: 800 CZK</p>
        </div>

        <div className="cart-actions">
          <Button text="Pokračovat k platbě" />
        </div>
      </div>
    </section>
  );
};
