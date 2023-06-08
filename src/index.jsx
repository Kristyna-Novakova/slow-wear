import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Navbar } from './Components/Navbar/Navbar';
import { MainPage } from './Pages/MainPage/MainPage';
import { HowItWorks } from './Pages/HowItWorks/HowItWorks';
import { CategoryView } from './Pages/CategoryView/CategoryView';
import { CategoryPage } from './Pages/CategoryPage/categoryPage';
import { ProductDetail } from './Pages/ProductDetail/ProductDetail';
import { ShoppingCart } from './Pages/ShoppingCart/ShoppingCart';
import { Footer } from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainPage />
      <HowItWorks />
      <CategoryView />
      <CategoryPage />
      <ProductDetail />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
