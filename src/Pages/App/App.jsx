import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { Footer } from '../../Components/Footer/Footer';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jak-to-funguje" element={<HowItWorks />} />
        <Route path="/kategorie/:categoryId" element={<CategoryPage />} />
        <Route
          path="/category/:categoryId/:productId"
          element={<ProductDetail />}
        />
        <Route path="/kosik" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
};
