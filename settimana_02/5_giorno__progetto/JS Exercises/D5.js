/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


console.log("|--- Esercizio: 1 ---|");

for (i = 0; i < pets.length; i++) {     // variabile di ciclo "i" inizializzata a 0 - si ripete fino a quando i è minore della lunghezza dell'array pets - ad ogni iterazione incrementa i di 1.
  console.log(pets[i]);                 // ad ogni iterazione stampo l'elemento corrente dell'array pets alla posizione i sulla console.
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


console.log("|--- Esercizio: 2 ---|");

pets.sort();                   // ordino gli elementi dell'array pets in ordine alfabetico

console.log(pets);             // stampo sulla console l'array pets dopo l'ordinamento


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/


console.log("|--- Esercizio: 3 ---|");

pets.reverse();               // inverto l'ordine degli elementi nell'array pets

console.log(pets);            // stampo sulla console l'array pets con gli elementi appena invertiti


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


console.log("|--- Esercizio: 4 ---|");

const firstPet = pets.shift();     // elimino il primo elemento dell'array pets e lo assegno alla variabile firstPet
pets.push(firstPet);               // quindi lo riaggiungo in fondo all'array

console.log(pets);                 // stampo sulla console l'array pets col nuovo ordine appena stabilito


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


console.log("|--- Esercizio: 5 ---|");

cars[0].licensePlate = 'aa111bb';   // seleziono singolarmente gli oggetti nell'array cars, aggiungo la proprietà licensePlate
cars[1].licensePlate = 'cc222dd';    // e assegno un valore.
cars[2].licensePlate = 'ee333ff';

console.log(cars)                   // stampo sulla console l'array cars aggiornato


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


console.log("|--- Esercizio: 6 ---|");

const newCar = {                     // creo un nuovo oggetto basandomi sulla struttura di quelli già creati
  brand: 'Fiat',
  model: 'Panda',
  color: 'acid-green',
  trims: ['adamantium', 'luxury', 'unlimited'],
  licensePlate: 'gg444hh'
};

cars.push(newCar);                   // aggiungo il nuovo oggetto all'array cars
console.log(cars);                   // stampo sulla console l'array cars aggiornato

for (i = 0; i < cars.length; i++) {    // itero attraverso l'array cars con un ciclo for per ogni oggetto - si ripete fino a quando i è minore della lunghezza dell'array cars - ad ogni iterazione incrementa i di 1.
  cars[i].trims.pop();                 // ad ogni iterazione entro in trims ed uso pop per eliminare l'ultimo elemento da questo array
}

console.log(cars);                   // stampo sulla console l'array cars aggiornato


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []


console.log("|--- Esercizio: 7 ---|");

for (i = 0; i < cars.length; i++) {    // itero ancora attraverso l'array cars
  justTrims.push(cars[i].trims[0]);    // ad ogni iterazione, aggiungo all'array justTrims il primo elemento dell'array trims (contenuto in cars)
}

console.log(justTrims);                // stampo sulla console l'array justTrims (elenco dei primi trims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


console.log("|--- Esercizio: 8 ---|");

for (i = 0; i < cars.length; i++) {         // ciclo l'array cars
  if (cars[i].color.charAt(0) === "b") {    // controllo se la prima lettera del valore nella proprietà color è una b
    console.log("Fizz");                     // se è true, stampo Fizz sulla console
  } else {
      console.log("Buzz");                   // se è false, stampo Buzz sulla console
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


console.log("|--- Esercizio: 9 ---|");

let index = 0                                // creo una variabile index per la posizione mentre itero attraverso l'array.

while (index < numericArray.length && numericArray[index] !== 32) {  // avvio un ciclo che si ripeterà fintanto che l'indice è inferiore alla lunghezza dell'array E fintanto che l'elemento esaminato è diverso da 32
  console.log(numericArray[index]);                                  // stampo sulla console l'elemento corrente ad ogni ciclo
  index++;                                                             // incremento l'indice per passare all'elemento sucessivo e ripetere il ciclo 
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']


console.log("|--- Esercizio: 10 ---|");

const newArray = new Array(charactersArray.length);  // creo un nuovo array

for (i = 0; i < charactersArray.length; i++) {  // itero attraverso ogni elemento dell'array charactersArray
  switch (charactersArray[i]) {                 // uso switch per confrontare i caratteri nell'array fornito con i caratteri dell'alfabeto e la loro posizione   
    case 'a': newArray[i] = 1;                  // ad ogni corrispondenza carattere-caso, assegno l'indice corretto dell'array newArray
      break;
    case 'b': newArray[i] = 2;
      break;
    case 'c': newArray[i] = 3;
      break;
    case 'd': newArray[i] = 4;
      break;
    case 'e': newArray[i] = 5;
      break;
    case 'f': newArray[i] = 6;
      break;
    case 'g': newArray[i] = 7;
      break;
    case 'h': newArray[i] = 8;
      break;
    case 'i': newArray[i] = 9;
      break;
    case 'l': newArray[i] = 10;
      break;
    case 'm': newArray[i] = 11;
      break;
    case 'n': newArray[i] = 12;
      break;
    case 'o': newArray[i] = 13;
      break;
    case 'p': newArray[i] = 14;
      break;
    case 'q': newArray[i] = 15;
      break;
    case 'r': newArray[i] = 16;
      break;
    case 's': newArray[i] = 17;
      break;
    case 't': newArray[i] = 18;
      break;
    case 'u': newArray[i] = 19;
      break;
    case 'v': newArray[i] = 20;
      break;
    case 'z': newArray[i] = 21;
      break;
    default: newArray[i] = "!! non è un carattere dell'alfabeto italiano !!"; // se non c'è corrispondenza nei casi precedenti, assegno un messaggio di errore 
      break;
  }
}

console.log(newArray);        // stampo sulla console newArray che contiene le posizioni di ogni carattere fornito rispetto all'alfabeto italiano.