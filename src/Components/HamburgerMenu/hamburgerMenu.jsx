import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { useCatalogue } from '../../lib/store';

export const HamburgerMenu = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const catalogue = useCatalogue();

  const handleCategoriesList = (event) => {
    event.stopPropagation();
    setOpenCategories(!openCategories);
  };

  return (
    <div className="menu-items">
      <ul>
        <li
          onClick={handleCategoriesList}
          className={
            { openCategories } ? 'categories-menu' : 'categories-menu close'
          }
        >
          <a>
            Kategorie <SlArrowDown className="arrow-icon" />
          </a>
        </li>
        {openCategories && catalogue && (
          <div className="categories-list">
            <ul>
              {Object.keys(catalogue).map((categoryId) => (
                <li key={categoryId}>
                  <Link to={`/kategorie/${categoryId}`}>
                    {catalogue[categoryId].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <li>
          <Link to="/jak-to-funguje" className="categories-menu">
            Jak to funguje
          </Link>
        </li>
        <li>
          <Link to="/" className="categories-menu">
            Přihlášení
          </Link>
        </li>
        <li>
          <Link to="/" className="categories-menu">
            Moje objednávky
          </Link>
        </li>
      </ul>
    </div>
  );
};
