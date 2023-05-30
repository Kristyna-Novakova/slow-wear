import React from 'react';
import './style.css';
import tshirts from './img/tshirts.jpg';
import jeans from './img/jeans.jpg';
import dress from './img/dress.jpg';
import jackets from './img/jackets.jpg';

export const CategoryView = () => {
  return (
    <section>
      <div className="category-view-container align-center-content">
        <div className="category-view-text">
          <h2>Jsi připravena na další krok?</h2>
          <p>
            Prozkoumej kategorie níže a pusť se do výběru oblečení, které
            nejenom vypadá dobře, ale také pomáhá naší planetě. Děkujeme, že jsi
            součástí, a doufáme, že ti nabídka přinese radost.
          </p>
        </div>
        <div className="category-view-photos">
          <img src={tshirts} alt="Top" />
          <img src={jeans} alt="Džíny" />
          <img src={dress} alt="Šaty" />
          <img src={jackets} alt="Bunda" />
        </div>
      </div>
    </section>
  );
};
