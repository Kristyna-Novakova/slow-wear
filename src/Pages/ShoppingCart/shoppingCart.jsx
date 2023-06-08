import React from 'react';
import './style.css';
import top1 from '../../img/top1.png';
import { Button } from '../../Components/Button/Button';

export const ShoppingCart = () => {
  return (
    <section class="section cart-section">
      <h2 class="cart-title">Nákupní košík</h2>

      <div class="cart-items">
        <div class="item-image">
          <img src={top1} alt="Produkt 1" />
        </div>
        <div class="item-details">
          <h3 class="item-name">Tričko s potiskem</h3>
          <p class="item-size">Velikost: M</p>
          <p class="item-quantity">Množství: 2</p>
          <p class="item-price">Cena: 200 CZK</p>
          <button class="remove-button">Odebrat</button>
        </div>
      </div>

      <div class="cart-items">
        <div class="item-image">
          <img src={top1} alt="Produkt 1" />
        </div>
        <div class="item-details">
          <h3 class="item-name">Tričko s potiskem</h3>
          <p class="item-size">Velikost: M</p>
          <p class="item-quantity">Množství: 2</p>
          <p class="item-price">Cena: 200 CZK</p>
          <button class="remove-button">Odebrat</button>
        </div>
      </div>

      <div class="cart-summary">
        <h3 class="summary-title">Souhrn objednávky</h3>
        <p class="summary-total">Celková cena: 800 CZK</p>
      </div>

      <div class="cart-actions">
        <Button text="Pokračovat k platbě" />
      </div>
    </section>
  );
};
