import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import {
  useShoppingCart,
  useCatalogue,
  findProduct,
  computeTotalPrice,
  useSession,
} from '../../lib/store';
import { insertOrders } from '../../lib/db';

export const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearShoppingCart } = useShoppingCart();
  const { session } = useSession();

  const catalogue = useCatalogue();
  const navigate = useNavigate();

  const totalPrice = computeTotalPrice(cartItems, catalogue);

  const handleSetOrder = async () => {
    const { data, error } = await insertOrders(cartItems);

    if (!session) {
      navigate('/muj-ucet');
      return;
    }

    if (error) {
      alert('Objednávku se nepodařilo uložit. Zkuste to později.');
      return;
    }

    clearShoppingCart();
    navigate(`/objednavka/${data[0].id}`);
  };

  return (
    <section className="section">
      <div className="cart-section">
        <h2 className="cart-title">Nákupní košík</h2>

        {cartItems.length === 0 && (
          <p className="empty-cart">
            Nákupní košík zeje prázdnotou. Vyber si z naší široké nabídky
            oblečení a naplň ho stylovými kousky.{' '}
          </p>
        )}

        {cartItems && (
          <ul className="cart-items">
            {cartItems.map((item) => {
              const product = findProduct(item, catalogue);

              return (
                <li
                  className="cart-item"
                  key={item.productId + '_' + item.size}
                >
                  <Link to={`/kategorie/${item.categoryId}/${item.productId}`}>
                    <div className="item-image">
                      <img
                        src={`/img/products/${product.url}`}
                        alt={product.name}
                      />
                    </div>
                  </Link>
                  <div className="item-details">
                    <Link
                      to={`/kategorie/${item.categoryId}/${item.productId}`}
                    >
                      <h3 className="item-name">{product.name}</h3>
                    </Link>
                    <p className="item-size">Velikost: {item.size}</p>
                    <p className="item-quantity">Množství: {item.quantity}</p>
                    <p className="item-price">
                      Cena za kus: {product.price} {product.currency}/měsíc
                    </p>
                    <p className="item-price">
                      Cena celkem: {product.price * item.quantity}{' '}
                      {product.currency}/měsíc
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
        )}

        <div className="cart-summary">
          <h3 className="summary-title">Souhrn objednávky</h3>
          <p className="summary-total">
            Celková cena za měsíc: {totalPrice} Kč
          </p>
        </div>

        <div className="cart-actions">
          <Link to="/kategorie">
            <Button text="Pokračovat v nákupu" />
          </Link>
          <Button
            text="Odeslat objednávku"
            onClick={handleSetOrder}
            disabled={cartItems.length === 0}
          />
        </div>
      </div>
    </section>
  );
};
