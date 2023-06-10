import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';

export const HamburgerMenu = () => {
  const [openCategories, setOpenCategories] = useState(false);

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
        {openCategories && (
          <div className="categories-list">
            <ul>
              <li>
                <Link to="/kategorie/topy">Topy</Link>
              </li>
              <li>
                <Link to="/kategorie/džíny">Džíny</Link>
              </li>
              <li>
                <Link to="/kategorie/šaty">Šaty</Link>
              </li>
              <li>
                <Link to="/kategorie/bundy">Bundy</Link>
              </li>
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
