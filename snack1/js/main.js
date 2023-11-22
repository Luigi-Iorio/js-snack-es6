"use strict";

// array di oggetti bici
const bici = [
  {
    nome: "Kona",
    peso: 20,
  },
  {
    nome: "Trek",
    peso: 16,
  },
  {
    nome: "Cube",
    peso: 24,
  },
  {
    nome: "Sunn",
    peso: 17,
  },
];

// array di oggetti in console
console.log(bici);

// definire un peso minore
let biciPesoMinore = bici[0];

// destructuring array
const [prima, seconda, terza, quarta] = bici;

// ciclo per scorrere le bici e verifcare il peso minore
bici.forEach((biciAttuale) => {
  if (biciAttuale.peso < biciPesoMinore.peso) {
    biciPesoMinore = biciAttuale;
  }
});

// bici peso minore in console
console.log(
  `La bici con il peso minore (${biciPesoMinore.peso}kg) è: ${biciPesoMinore.nome}`
);

// bici con peso minore nel dom
const body = document.querySelector("body");
body.innerHTML = `<h1>La bici con il peso minore (${biciPesoMinore.peso}kg) è: ${biciPesoMinore.nome}</h1>`;
