import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { useShoppingCart, useCatalogue } from '../../lib/store';

export const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const catalogue = useCatalogue();

  const findProduct = ({ categoryId, productId }) =>
    catalogue[categoryId].products[productId];

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * findProduct(item).price,
    0,
  );

  return (
    <section className="section">
      <div className="cart-section">
        <h2 className="cart-title">Nákupní košík</h2>

        <ul className="cart-items">
          {cartItems.map((item) => {
            const product = findProduct(item);

            return (
              <li className="cart-item" key={item.productId + item.size}>
                <div className="item-image">
                  <img
                    src={`/img/products/${product.url}`}
                    alt={product.name}
                  />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{product.name}</h3>
                  <p className="item-size">Velikost: {item.size}</p>
                  <p className="item-quantity">Množství: {item.quantity}</p>
                  <p className="item-price">
                    Cena za kus: {product.price} {product.currency}
                  </p>
                  <p className="item-price">
                    Cena celkem: {product.price * item.quantity}{' '}
                    {product.currency}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item)}
                  >
                    Odebrat
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="cart-summary">
          <h3 className="summary-title">Souhrn objednávky</h3>
          <p className="summary-total">Celková cena: {totalPrice} Kč</p>
        </div>

        <div className="cart-actions">
          <Link to="/platba">
            <Button text="Pokračovat k platbě" />
          </Link>
        </div>
      </div>
    </section>
  );
};
