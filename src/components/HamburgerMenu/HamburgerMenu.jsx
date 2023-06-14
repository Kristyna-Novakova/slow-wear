import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { useCatalogue, useSession } from '../../lib/store';

export const HamburgerMenu = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const catalogue = useCatalogue();
  const { session } = useSession();

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
          <Link to="/muj-ucet" className="categories-menu">
            {!session ? 'Přihlášení' : ' Můj účet'}
          </Link>
        </li>
        {session && (
          <li>
            <Link to="/muj-ucet/objednavky" className="categories-menu">
              Moje objednávky
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
