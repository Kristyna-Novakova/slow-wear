import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Comment } from 'react-loader-spinner';

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <Comment
        visible={true}
        height="60"
        width="60"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#868686"
      />
      <h2 className="error-title">Stránka nenalezena</h2>
      <p className="error-description">
        Bohužel se nám nepodařilo načíst požadovanou stránku. Prosím, vraťte se
        na <Link to="/">domovskou stránku</Link> a zkuste to znovu.
      </p>
    </div>
  );
};
