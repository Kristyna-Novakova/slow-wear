import React from 'react';
import './style.css';
import { Button } from '../../Components/Button/Button';

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
          <Button text="Objev více" />
        </div>

        <div className="category-view-photos">
          <div className="category-image category-image-tshirts">
            <h3>Topy</h3>
          </div>
          <div className="category-image category-image-jeans">
            <h3>Džíny</h3>
          </div>
          <div className="category-image category-image-dress">
            <h3>Šaty</h3>
          </div>
          <div className="category-image category-image-jackets">
            <h3>Bundy</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
