import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{lista}</p>
    </div>
  );
}

var lista = [
  'fa',
  'bio',
  'vi',
  'tor',
  'ma',
  'ci',
  'ei',
  'ra',
  'de',
  'so',
  'u',
  'za',
  'glei',
  'ci',
  'a',
  'ne',
  'fe',
  'rei',
  'ri',
];

const embaralha = (lista) => {
  // Loop em todos os elementos
  for (let i = lista.length - 1; i > 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));

    // Reposicionando elemento
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }

  // Retornando array com aleatoriedade
  return lista;
};

embaralha(lista);
