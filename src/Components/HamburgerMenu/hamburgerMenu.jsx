import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { useCatalaogue } from '../../lib/store';

export const HamburgerMenu = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const catalogue = useCatalaogue();

  const handleCategoriesList = () => {
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
          Kategorie <SlArrowDown className="arrow-icon" />
        </li>
        {openCategories && catalogue && (
          <div className="categories-list">
            <ul>
              {Object.keys(catalogue).map((categoryId) => (
                <li>
                  <Link to={`/kategorie/${categoryId}`}>
                    {catalogue[categoryId].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/jak-to-funguje" className="categories-menu">
          Jak to funguje
        </Link>
        <li>Přihlášení</li>
        <li>Moje objednávky</li>
      </ul>
    </div>
  );
};
