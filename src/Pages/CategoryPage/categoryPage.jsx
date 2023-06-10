import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.css';
import { useCatalaogue } from '../../lib/store';

export const CategoryPage = () => {
  const catalogue = useCatalaogue();
  const { categoryId } = useParams();

  if (!catalogue) {
    return <p>Data se načítají.</p>;
  }

  const categoryData = catalogue[categoryId];

  if (!categoryData) {
    return <p>Kategorie nenalezena.</p>;
  }

  return (
    <section className="section align-center-content">
      <div>
        <h2 className="section-title">{categoryData.title}</h2>
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
