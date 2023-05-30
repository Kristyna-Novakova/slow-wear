import React from 'react';
import './style.css';
import step1 from './img/step1.png';
import step2 from './img/step2.png';
import step3 from './img/step3.png';

export const HowItWorks = () => {
  return (
    <section className="section align-center-content">
      <div>
        <h2 className="section-title">Jak to funguje</h2>
        <div className="image-container">
          <div className="image">
            <img src={step1} alt="Obrázek 1" />
            <h3>Vyber si</h3>
            <p className="image-caption">
              Čtyři topy a stejné šaty ve dvou velikostech? Šest párů džín?
              Jeden kus od všeho? Je to na tobě.
            </p>
          </div>
          <div className="image">
            <img src={step2} alt="Obrázek 2" />
            <h3>Nos je opakovaně</h3>
            <p className="image-caption">
              Celý další měsíc jsou vybrané kousky jen tvoje. O praní a opravy
              se nemusíš starat.
            </p>
          </div>
          <div className="image">
            <img src={step3} alt="Obrázek 3" />
            <h3>Kup, vrať, opakuj</h3>
            <p className="image-caption">
              Pokud se do něčeho zamiluješ, kup si to. Zbytek pošli zpět do data
              rezervace a opakuj celý proces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
