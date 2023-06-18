import React from 'react';
import QRCode from 'react-qr-code';
import './style.css';

const computeIBAN_CZ = (cisloUctu) => {
  const [celeCislo, kodBanky] = cisloUctu.split('/');
  let predcisli, cislo;
  if (celeCislo.includes('-')) {
    [predcisli, cislo] = celeCislo.split('-');
  } else {
    predcisli = '';
    cislo = celeCislo;
  }
  const bban =
    kodBanky.padStart(4, '0') +
    predcisli.padStart(6, '0') +
    cislo.padStart(10, '0');
  const zbytek = Number(BigInt(bban + '123500') % 97n); // C=12, Z=35, 00 – budoucí kontrolní číslice
  return `CZ${String(98 - zbytek).padStart(2, '0')}${bban}`;
};

const generateQRplatbaText = ({
  cisloUctu,
  variabilniSymbol,
  castka,
  zprava,
}) => {
  const iban = computeIBAN_CZ(cisloUctu);
  return `SPD*1.0*ACC:${iban}*AM:${castka}*CC:CZK*MSG:${encodeURIComponent(
    zprava.replaceAll('—', '-'),
  )}*X-VS:${variabilniSymbol}`;
};

export const Payment = (props) => {
  return (
    <div className="payment-section">
      <h2 className="section-title">Platba</h2>
      <p className="payment-text">
        Projekt Slow Wear zatím nemá reálné zboží a nemůže přijímat objednávky.
        Pokud si ale chcete připsat body za dobrou karmu, můžete podpořit{' '}
        <a href="https://www.nadacnifondczechitas.cz/" target="_blank">
          Nadační fond Czechitas.
        </a>
      </p>
      <div className="payment-details">
        <p>Adresát platby: Nadační fond Czechitas</p>
        <p>Číšlo účtu: {props.cisloUctu}</p>
        <p>Variabilní symbol: {props.variabilniSymbol}</p>
        <p>Částka: {props.castka} Kč</p>
      </div>
      <QRCode value={generateQRplatbaText(props)} className="qr-code" />
    </div>
  );
};
