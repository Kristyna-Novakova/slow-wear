import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { CategoryView } from '../CategoryView/CategoryView';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { UserLayout } from '../UserLayout/UserLayout';
import { Orders } from '../Orders/Orders';
import { UserDetail } from '../UserDetails/UserDetails';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Footer } from '../../components/Footer/Footer';
import { AboutUs } from '../AboutUs/AboutUs';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jak-to-funguje" element={<HowItWorks />} />
        <Route path="/kategorie" element={<CategoryView />} />
        <Route path="/kategorie/:categoryId" element={<CategoryPage />} />
        <Route
          path="/kategorie/:categoryId/:productId"
          element={<ProductDetail />}
        />
        <Route path="/kosik" element={<ShoppingCart />} />
        <Route path="/objednavka/:orderId" element={<OrderDetail />} />
        <Route path="/muj-ucet" element={<UserLayout />}>
          <Route path="" element={<UserDetail />} />
          <Route path="objednavky" element={<Orders />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/o-nas" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};
