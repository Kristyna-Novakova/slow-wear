import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { Button } from '../../Components/Button/Button';
import jsonData from '../../categories.json';

export const ProductDetail = () => {
  const { category, id } = useParams();
  const categoryData = jsonData.categories.find(
    (categoryObj) => categoryObj.category === category,
  );
  const product = categoryData.products.find((product) => product.id === id);

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
          <img src={`../../${product.url}`} alt="Fotografie tička s popisem" />
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
