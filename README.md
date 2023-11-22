# Esercitazioni

## Snack 1

L'obbiettivo di questo esercizio è: dopo aver creato un array di oggetti (proprietà: nome e peso), stampare a schermo la bici con minore peso utilizzando destructuring e template literal.

### Risoluzione in linguaggio naturale

1. Creare un array di oggetti con le proprietà: nome, peso.

2. Destructuring - prendere le proprietà degli oggetti e inserirli in variabili.

   esempio:

   ```js
   const { nome, peso } = bici;
   ```

   _(bici è l'array di oggetti)_

3. Con il metodo degli array **_filter()_** estrapolare la bici con il peso minore

4. Tramite template literal stampare a schermo la bici

## Snack 2

L'obbiettivo di questo esercizio è: dopo aver creato un array di oggetti di squadre di calcio (proprietà: nome, punti fatti, falli subiti), generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti e usando la destrutturazione creare un nuovo array i cui elementi contengono solo nomi e falli subiti, stampare tutto in console.

### Risoluzione in linguaggio naturale

1. Creare un array di oggetti con le proprietà: nome, punti fatti e falli subiti

2. Generare randomicamente il numero di punti fatti e falli subiti

3. Destrutturazione le proprietà nomi e falli subiti, e creare un nuovo array con questi elementi

4. Stampare tutto in console
