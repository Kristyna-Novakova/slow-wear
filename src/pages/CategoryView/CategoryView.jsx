import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Button } from '../../components/Button/Button';
import { useCatalogue } from '../../lib/store';

export const CategoryView = () => {
  const catalogue = useCatalogue();

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
          {/* <Button text="Objev více" /> */}
        </div>

        {catalogue && (
          <ul className="category-view-photos">
            {Object.keys(catalogue).map((categoryId) => (
              <li
                key={categoryId}
                className="category-image"
                style={{
                  backgroundImage: `url(/img/categories/${categoryId}.jpg)`,
                }}
              >
                <Link key={categoryId} to={`/kategorie/${categoryId}`}>
                  <h3>{catalogue[categoryId].title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
