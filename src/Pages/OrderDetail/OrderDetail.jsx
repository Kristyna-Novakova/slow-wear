import React from 'react';

export const OrderDetail = () => {
  return (
    <>
      <div className="order-title">
        <h2>Moje objednávky</h2>
      </div>
      <div className="order-detail">
        <h3 className="order-number">Objednávka číslo 85245</h3>
        <p className="shipped-order">Odesláno 11.06.2023</p>
      </div>
    </>
  );
};
