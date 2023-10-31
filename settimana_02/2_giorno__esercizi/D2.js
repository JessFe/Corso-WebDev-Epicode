/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Esercizio 1:")
let num1 = 3;
let num2 = 2;
if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else {
  console.log(num2 + " è maggiore di " + num1);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("Esercizio 2:")
let num = 1;
if (num != 5) console.log("not equal");


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Esercizio 3:")
let x = 15;
if (x%5 == 0) {
  console.log(x + " è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("Esercizio 4:")
let int1 = 1;
let int2 = 8;
if (int1 === 8 || int2 === 8) {
  console.log("almeno uno dei due numeri è = a 8");
} else if ((int1 + int2) === 8) {
  console.log("la somma dei 2 numeri è = a 8");
} else if ((int1 - int2) === 8) {
  console.log(int1 + " - " + int2 + " = 8");
} else if ((int2 - int1) === 8) {
  console.log(int2 + " - " + int1 + " = 8");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("Esercizio 5:")
let totalShoppingCart = 51;
const costoSpedizione = 10;
if (totalShoppingCart <= 50) {
  console.log("Checkout: €" + (totalShoppingCart + costoSpedizione));
} else {
  console.log("Congratulazioni, la spedizione è gratis!\nCheckout: €" + totalShoppingCart);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Esercizio 6:")
let totalShoppingCartBF = (totalShoppingCart * 0.8);
if (totalShoppingCartBF <= 50) {
  console.log("Checkout: €" + (totalShoppingCartBF + costoSpedizione).toFixed(2));
} else {
  console.log("Congratulazioni, la spedizione è gratis!\nCheckout: €" + totalShoppingCartBF.toFixed(2));
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("Esercizio 7:")
let varN1 = 2;
let varN2 = 1;
let varN3 = 3;
if (varN1 >= varN2 && varN1 >= varN3) {
  if (varN2 >= varN3) {
    console.log(varN1, varN2, varN3);
  } else {
    console.log(varN1, varN3, varN2);
  }
} else if (varN2 >= varN1 && varN2 >= varN3) {
  if (varN1 >= varN3) {
    console.log(varN2, varN1, varN3);
  } else {
    console.log(varN2, varN3, varN1);
  }
} else {
  if (varN1 >= varN2) {
    console.log(varN3, varN1, varN2);
  } else {
    console.log(varN3, varN2, varN1);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("Esercizio 8:")
let varEs8 = true;
if (typeof varEs8 === "number") {
  console.log("Il valore inserito è un numero.");
} else {
  console.log("Il valore inserito NON è un numero.");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Esercizio 9:")
let varEs9 = 1;
if (varEs9%2 == 0) {
  console.log("Il numero inserito è un numero pari.");
} else {
  if  (varEs9%2 == 1) {
    console.log("Il numero inserito è un numero dispari.");
  } else {
    console.log("! Il valore inserito NON è un numero !");
  }
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("Esercizio 10:")
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log("Esercizio 11:")
me.city = 'Toronto';
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("Esercizio 12:")
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("Esercizio 13:")
me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("Esercizio 14:")
const varEs14 = [];
    varEs14.push(1);
    varEs14.push(2);
    varEs14.push(3);
    varEs14.push(4);
    varEs14.push(5);
    varEs14.push(6);
    varEs14.push(7);
    varEs14.push(8);
    varEs14.push(9);
    varEs14.push(10);
    console.log(varEs14);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("Esercizio 15:")
varEs14[9] = 100;
console.log(varEs14);
