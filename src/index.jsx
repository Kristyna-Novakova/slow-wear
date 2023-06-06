import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Navbar } from './components/Navbar/navbar';
import { MainPage } from './Pages/MainPage/mainPage';
import { HowItWorks } from './Pages/HowItWorks/howItWorks';
import { CategoryView } from './Pages/CategoryView/categoryView';
import { Footer } from './Components/Footer/footer';
import { CategoryPage } from './Pages/CategoryPage/categoryPage';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainPage />
      <HowItWorks />
      <CategoryView />
      <CategoryPage />
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
