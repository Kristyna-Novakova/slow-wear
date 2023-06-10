import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { Payment } from '../Payment/payment';
import { Footer } from '../../components/Footer/Footer';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jak-to-funguje" element={<HowItWorks />} />
        <Route path="/kategorie/:categoryId" element={<CategoryPage />} />
        <Route
          path="/kategorie/:categoryId/:productId"
          element={<ProductDetail />}
        />
        <Route path="/kosik" element={<ShoppingCart />} />
        <Route
          path="/platba"
          element={
            <Payment
              cisloUctu="2202326673/2010"
              variabilniSymbol={20232023}
              castka={200}
              zprava="Ahoj"
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
