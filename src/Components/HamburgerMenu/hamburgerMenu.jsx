import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
          Kategorie
        </li>
        {openCategories && (
          <div className="categories-list">
            <ul>
              <Link to="/kategorie/topy">Topy</Link>
              <Link to="/kategorie/džíny">Džíny</Link>
              <Link to="/kategorie/šaty">Šaty</Link>
              <Link to="/kategorie/bundy">Bundy</Link>
            </ul>
          </div>
        )}
        <Link to="/jaktofunguje" className="categories-menu">
          Jak to funguje
        </Link>
        <li>Přihlášení</li>
        <li>Moje objednávky</li>
      </ul>
    </div>
  );
};
