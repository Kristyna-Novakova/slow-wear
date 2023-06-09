import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.css';
import jsonData from '../../categories.json';

export const CategoryPage = () => {
  console.log('Data', jsonData);
  const { category } = useParams();
  const categoryData = jsonData.categories.find(
    (categoryObj) => categoryObj.category === category,
  );

  if (!categoryData) {
    return <p>Kategorie nenalezena.</p>;
  }

  return (
    <section className="section align-center-content">
      <div>
        <h2 className="section-title">{category}</h2>
        <div className="category-image-container">
          {categoryData &&
            categoryData.products.map((product) => (
              <div className="category-image-detail" key={product.id}>
                <Link to={`/category/${category}/${product.id}`}>
                  <img src={`../../${product.url}`} alt={product.name} />
                </Link>

                <h3>{product.name}</h3>
                <p className="image-caption">
                  {product.price} {product.currency}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
