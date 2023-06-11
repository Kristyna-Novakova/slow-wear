import React from 'react';
import './style.css';
import { useSession } from '../../lib/store';

export const UserDetail = () => {
  const { session } = useSession();

  console.log(session);
  return (
    <div className="user-details">
      <div className="user-title">
        <h2>Profil</h2>
      </div>
      <div className="user-detail">
        <div className="user-name">
          <h3>Jméno</h3>
          <p>{session.user.user_metadata.full_name}</p>
        </div>
        <div className="user-email">
          <h3>E-mail</h3>
          <p>{session.user.email}</p>
        </div>
        <div className="user-phone-number">
          <h3>Telefonní číslo</h3>
          {session.user.phone === '' ? (
            <p className="italic">Neuvedeno</p>
          ) : (
            session.user.phone
          )}
        </div>
      </div>
    </div>
  );
};
