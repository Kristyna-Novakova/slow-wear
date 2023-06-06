import React from 'react';
import './style.css';
import top1 from '../../img/top1.png';
import top2 from '../../img/top2.png';
import top3 from '../../img/top3.png';

export const CategoryPage = () => {
  return (
    <section className="section align-center-content">
      <div>
        <h2 className="section-title">Topy</h2>
        <div className="category-image-container">
          <div className="category-image-detail">
            <img src={top1} alt="Obrázek 1" />
            <h3>Tričko s potiskem</h3>
            <p className="image-caption">100 CZK</p>
          </div>
          <div className="category-image-detail">
            <img src={top2} alt="Obrázek 1" />
            <h3>Tričko s potiskem</h3>
            <p className="image-caption">100 CZK</p>
          </div>
          <div className="category-image-detail">
            <img src={top3} alt="Obrázek 1" />
            <h3>Tričko s potiskem</h3>
            <p className="image-caption">100 CZK</p>
          </div>
        </div>
      </div>
    </section>
  );
};
