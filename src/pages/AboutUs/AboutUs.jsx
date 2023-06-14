import React from 'react';
import './style.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const AboutUs = () => {
  return (
    <div className="author-page">
      <h1>Kristýna Nováková</h1>
      <div className="author-info">
        <div className="about">
          <h2>Informace o autorce</h2>
          <p>
            Jsem Týna a od narození mám v sobě cestovatelského červa. K
            programování jsem si našla cestu skrze svou předchozí práci v
            CoolPeople, kde jsem pracovala na pozici Content Marketing
            Specialist. Tak dlouho jsem psala pracovní nabídky pro ajťáky, až
            jsem tady.
          </p>
          <h2>Odkaz na další projekty</h2>
          <ul>
            <li>
              <AiFillGithub />
              <a href="https://github.com/Kristyna-Novakova" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <AiFillLinkedin />
              <a
                href="https://www.linkedin.com/in/kristynanov/"
                target="_blank"
              >
                LinkedIn profil
              </a>
            </li>
            <li>
              <MdEmail />
              <a href="mailto:novakovkri@gmail.com">novakovkri@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="author-picture"></div>
      </div>
    </div>
  );
};
