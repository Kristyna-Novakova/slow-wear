import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Navbar } from './components/Navbar/navbar';
import { MainPage } from './Pages/MainPage/mainpage';
import { HowItWorks } from './Pages/HowItWorks/howitworks';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainPage />
      <HowItWorks />
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
