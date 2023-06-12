import React, { useState, useEffect } from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import { getSession, login } from '../../lib/db';
import { Loading } from '../Loading/Loading';
import { useSession } from '../../lib/store';
import { BsPerson } from 'react-icons/bs';
import { TiShoppingBag } from 'react-icons/ti';
import { FiLogOut } from 'react-icons/fi';

export const UserLayout = () => {
  const { session, sessionLoading, login, logout } = useSession();

  const handleGitHubLogin = () => login('github');
  const handleGmailLogin = () => login('google');
  // const handleFacebookLogin = () => login('facebook');

  if (sessionLoading) {
    return <Loading />;
  }

  if (session === null) {
    return (
      <div className="login-container">
        <button className="github" onClick={handleGitHubLogin}>
          Přihlásit se před GitHub
        </button>
        <button className="google" onClick={handleGmailLogin}>
          Přihlásit se před Google
        </button>
        {/* <button className="github" onClick={handleFacebookLogin}>
          Přihlásit se před Facebook
        </button> */}
      </div>
    );
  }

  return (
    <section className="user-page-section">
      <div className="user-detail-container">
        <h2 className="name">{session.user.user_metadata.full_name}</h2>
      </div>
      <div className="information-container">
        <div className="section-list">
          <ul>
            <li>
              <Link to="/muj-ucet">
                <BsPerson /> Profil
              </Link>
            </li>
            <li>
              <Link to="/muj-ucet/objednavky">
                <TiShoppingBag /> Objednávky
              </Link>
            </li>
            <li onClick={() => logout()}>
              <FiLogOut /> Odhlásit se
            </li>
          </ul>
        </div>
        <div className="detail-information-container">
          <Outlet />
        </div>
      </div>
    </section>
  );
};