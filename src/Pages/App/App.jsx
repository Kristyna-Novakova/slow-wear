import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { Footer } from '../../Components/Footer/Footer';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jaktofunguje" element={<HowItWorks />} />
        <Route path="/kategorie/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
