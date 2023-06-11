import React from 'react';
import './style.css';
import { listOrders, useQuery } from '../../lib/db';
import { format } from 'date-fns';

export const Orders = () => {
  const [loading, data, error] = useQuery(listOrders);

  console.log(data);

  return (
    <div className="orders">
      <div className="order-title">
        <h2>Moje objednávky</h2>
      </div>
      {data && (
        <div className="orders-detail">
          <ul className="order-detail">
            {data.map((order) => (
              <li key={order.id}>
                <h3 className="order-number">Objednávka číslo {order.id}</h3>
                <p className="shipped-order">
                  Odesláno {format(new Date(order.created_at), 'd. M. yyyy')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
