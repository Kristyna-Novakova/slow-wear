import React from 'react';
import './style.css';

export const UserDetail = () => {
  return (
    <>
      <div className="user-title">
        <h2>Profil</h2>
      </div>
      <div className="user-detail">
        <div className="user-name">
          <h3>Jméno</h3>
          <p>Nelča Letochová</p>
        </div>
        <div className="user-phone-number">
          <h3>Telefonní číslo</h3>
          <p>+420 789 245 324</p>
        </div>
        <div className="user-address">
          <h3>Adresa</h3>
          <p>Koníkova 58 Praha 11</p>
        </div>
      </div>
    </>
  );
};
