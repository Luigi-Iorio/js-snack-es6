"use strict";
// funzione numeri random
function nRandom() {
  return Math.floor(Math.random() * 7) + 3;
}

// array di squadre
const squadre = [
  {
    nome: "Udinese",
    punti_fatti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Inter",
    punti_fatti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Roma",
    punti_fatti: 0,
    falli_subiti: 0,
  },
];

// assegnazione numero random ai punti fatti
squadre.forEach((squadra) => {
  console.log(`--- ${squadra.nome}`);
  squadra.punti_fatti = nRandom();
  squadra.falli_subiti = nRandom();
  console.log(`Ha fatto ${squadra.punti_fatti} punti`);
});

// nuovo arrai con solo nome e falli subiti
const nuovoArray = squadre.map(({ nome, falli_subiti }) => {
  return {
    nome,
    falli_subiti,
  };
});

// log in console
console.log(nuovoArray);
