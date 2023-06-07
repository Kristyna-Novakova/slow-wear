import React, { useState } from 'react';
import './style.css';
import top1 from '../../img/top1.png';
import { Button } from '../../Components/Button/Button';

export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  // const [addCart, setAddCart] = useState({
  //   quantity: quantity,
  //   size: size,
  // });

  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);

    if (quantity >= 10) {
      setQuantity(10);
    }
  };

  // const handleAddCart = () => {
  //   setAddCart({
  //     quantity: quantity,
  //     size: size,
  //   });
  //   console.log(addCart);
  //   console.log('Test');
  // };

  return (
    <section className="section">
      <div className="product-page">
        <div className="product-image">
          <img src={top1} alt="Fotografie tička s popisem" />
        </div>
        <div className="product-content">
          <h2 className="product-title">Top s potiskem</h2>
          <p className="product-price">100 CZK</p>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            enim at justo lobortis tincidunt. Sed consequat finibus lectus at
            vulputate.
          </p>
          <div className="product-sizes">
            <h3>Velikost</h3>
            <div className="select-container">
              <select
                className="custom-select"
                onClick={(e) => setSize(e.target.value)}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
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
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) =>
                  quantity >= 10 ? setQuantity(10) : setQuantity(e.target.value)
                }
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
