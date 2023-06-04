import React, { useState } from 'react';
import './style.css';

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
          className={`categories-menu ${openCategories} ? "" : "close"`}
        >
          Kategorie
        </li>
        {openCategories && (
          <div className="categories-list">
            <ul>
              <li>Topy</li>
              <li>Džíny</li>
              <li>Šaty</li>
              <li>Bundy</li>
            </ul>
          </div>
        )}
        <li>Jak to funguje</li>
        <li>Přihlášení</li>
        <li>Moje objednávky</li>
      </ul>
    </div>
  );
};
