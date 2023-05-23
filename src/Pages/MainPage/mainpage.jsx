import React from 'react';
import './style.css';
import webCover from './img/web-cover.png';

export const MainPage = () => {
  return (
    <main>
      <div className="main-section">
        <div className="background-image">
          <img src={webCover} alt="Background Image" />
        </div>
        <div className="content">
          <h1>Being naked is the #1 most sustainable option. We are #2.</h1>
        </div>
      </div>
    </main>
  );
};
