import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Navbar } from './Components/Navbar/Navbar';
import { MainPage } from './Pages/MainPage/MainPage';
import { HowItWorks } from './Pages/HowItWorks/HowItWorks';
import { CategoryView } from './Pages/CategoryView/CategoryView';
import { Footer } from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainPage />
      <HowItWorks />
      <CategoryView />
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
