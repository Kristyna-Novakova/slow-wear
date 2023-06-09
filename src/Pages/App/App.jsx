import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { Footer } from '../../Components/Footer/Footer';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jaktofunguje" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </div>
  );
};
