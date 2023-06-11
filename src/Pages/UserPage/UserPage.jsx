import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const UserPage = () => {
  return (
    <section className="user-page-section">
      <div className="user-detail-container">
        <h2 className="name">Nelča Letochová</h2>
      </div>
      <div className="information-container">
        <div className="section-list">
          <ul>
            <li>
              {' '}
              <Link to="/muj-ucet/osobni-udaje">Profil</Link>
            </li>
            <li>
              <Link to="/muj-ucet/objednavky">Objednávky</Link>
            </li>
            <li>Odhlásit se</li>
          </ul>
        </div>
        <Outlet />
        <div className="detail-information-container">
          <h2 className="name"></h2>
        </div>
      </div>
    </section>
  );
};
