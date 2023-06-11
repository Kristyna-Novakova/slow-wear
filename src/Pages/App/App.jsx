import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainPage } from '../MainPage/MainPage';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { Payment } from '../Payment/payment';
import { UserPage } from '../UserPage/UserPage';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { UserDetail } from '../UserDetails/UserDetails';
import { Footer } from '../../components/Footer/Footer';
import {
  computeTotalPrice,
  useCatalogue,
  useShoppingCart,
} from '../../lib/store';

export const App = () => {
  const { cartItems } = useShoppingCart();
  const catalogue = useCatalogue();
  const totalPrice = computeTotalPrice(cartItems, catalogue);

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
              castka={totalPrice}
              zprava="Děkujeme"
            />
          }
        />
        <Route path="/muj-ucet" element={<UserPage />} />
        <Route path="/muj-ucet/objednavky" element={<OrderDetail />} />
        <Route path="/muj-ucet/osobni-udaje" element={<UserDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};
