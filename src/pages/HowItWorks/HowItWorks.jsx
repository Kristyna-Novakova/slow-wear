import React from 'react';
import './style.css';
import step1 from './img/step1.png';
import step2 from './img/step2.png';
import step3 from './img/step3.png';

export const HowItWorks = ({ sectionRef }) => {
  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section align-center-content"
    >
      <div>
        <h2 className="section-title">Jak to funguje</h2>
        <p className="section-description">
          Představ si svůj šatník plný stylových a moderních kousků oblečení,
          které si můžeš každý měsíc obměňovat bez nutnosti kupovat nové. To je
          přesně to, co nabízí půjčovna oblečení Slow-Wear!
        </p>
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
              Celý další měsíc od objednání jsou vybrané kousky jen tvoje. O
              praní a opravy před vrácením se nemusíš starat.
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
