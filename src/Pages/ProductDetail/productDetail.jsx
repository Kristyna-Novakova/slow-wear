import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { Button } from '../../Components/Button/Button';
import { useCatalogue } from '../../lib/store';

const minQuantity = 1;
const maxQuantity = 10;

export const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const catalogue = useCatalogue();

  if (!catalogue) {
    return <p>Data se načítají.</p>;
  }

  const product = catalogue[categoryId].products[productId];

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const handleDecrementQuantity = () => {
    setQuantity((quantity) =>
      quantity > minQuantity ? quantity - 1 : quantity,
    );
  };

  const handleIncrementQuantity = () => {
    setQuantity((quantity) =>
      quantity < maxQuantity ? quantity + 1 : quantity,
    );
  };

  const handleQuantityChange = (e) => {
    const valueData = Number(e.target.value);

    if (isNaN(valueData)) {
      setQuantity(minQuantity);
    } else if (valueData >= maxQuantity) {
      setQuantity(maxQuantity);
    } else if (valueData <= minQuantity) {
      setQuantity(minQuantity);
    } else {
      setQuantity(valueData);
    }
  };

  return (
    <section className="section">
      <div className="product-page">
        <div className="product-image">
          <img src={`/img/products/${product.url}`} alt={product.name} />
        </div>
        <div className="product-content">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">
            {product.price} {product.currency}
          </p>
          <p className="product-description">{product.description}</p>
          <div className="product-sizes">
            <h3>Velikost</h3>
            <div className="select-container">
              <select
                className="custom-select"
                onClick={(e) => setSize(e.target.value)}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="product-quantity">
            <h3>Množství</h3>
            <div className="quantity-input">
              <button
                className="decrement-button"
                onClick={handleDecrementQuantity}
              >
                -
              </button>
              <input
                type="text"
                pattern="\d{1,2}"
                inputMode="numeric"
                value={quantity}
                onChange={handleQuantityChange}
              />

              <button
                className="increment-button"
                onClick={handleIncrementQuantity}
              >
                +
              </button>
            </div>
          </div>
          <Button text="Přidat do košíku" />
        </div>
      </div>
    </section>
  );
};
