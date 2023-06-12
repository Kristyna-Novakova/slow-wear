import React from 'react';
import './style.css';
import { listOrders, useQuery } from '../../lib/db';
import { format } from 'date-fns';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { TiShoppingBag } from 'react-icons/ti';

export const Orders = () => {
  const [loading, data, error] = useQuery(listOrders);

  return (
    <div className="orders">
      <div className="order-title">
        <h2>Moje objednávky</h2>
      </div>

      {loading && <Loading />}
      {error && <p>Objednávky se nepodařilo načíst.</p>}

      {data && (
        <div className="orders-detail">
          <ul className="order-detail">
            {data.map((order) => (
              <li key={order.id}>
                <Link to={`/objednavka/${order.id}`}>
                  <h3 className="order-number">
                    <TiShoppingBag /> Objednávka číslo {order.id}
                  </h3>
                </Link>
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
