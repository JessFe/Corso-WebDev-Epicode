/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("|--- Esercizio: A ---|");

let sum = 10 + 20;
console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("|--- Esercizio: B ---|");

let random = Math.floor(Math.random() * 21);
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("|--- Esercizio: C ---|");

let me = {
  name: "Jessica",
  surname: "Ferro",
  age: 35
};

console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("|--- Esercizio: D ---|");

delete me.age;

console.log("Dopo la rimozione di 'age':", me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("|--- Esercizio: E ---|");

me.skills = ["HTML (marcatura)", "CSS (stile)", "JavaScript"];

console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("|--- Esercizio: F ---|");

me.skills.push("C#");

console.log(me)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("|--- Esercizio: G ---|");

me.skills.pop();

console.log(me);


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("|--- Esercizio: 1 ---|");

function dice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(dice());

// const dice = () => {
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// };

// console.log(dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("|--- Esercizio: 2 ---|");

// 1
function whoIsBigger(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

      // scrittura alternativa: const whoIsBigger = (num1, num2) => num1 > num2 ? num1 : num2;

const risultato = whoIsBigger(7, 4);
console.log('op. ternario: ' + risultato); 

// 2
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1 + " è maggiore";
  } else if (num2 > num1) {
    return num2 + " è maggiore";
  } else {
    return "I numeri sono uguali";
  }
}

console.log('if else: ' + whoIsBigger(10, 10));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("|--- Esercizio: 3 ---|");

function splitMe(stringa) {
  return stringa.split(" ");
}

console.log(splitMe("I love coding"));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("|--- Esercizio: 4 ---|");

function deleteOne(stringa2, booleano) {
  if (booleano === true) {
    return stringa2.substring(1);
  } else {
    return stringa2.substring(0, stringa2.length - 1);
  }
}

console.log(deleteOne("Questa è una stringa", true));
console.log(deleteOne("Questa è una stringa", false));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("|--- Esercizio: 5 ---|");

function onlyLetters(stringa3) {
  let newStringa = "";

  for (let i = 0; i < stringa3.length; i++) {
    const carattere = stringa3[i];

    if (isNaN(parseInt(carattere))) {
      newStringa += carattere;
    }
  }

  return newStringa;
}

const senzaCifre = onlyLetters("I have 4 dogs");
console.log(senzaCifre);


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("|--- Esercizio: 6 ---|");

function isThisAnEmail(strng) {
  const contChiocciola = strng.includes('@');
  const contPunto = strng.includes('.');

  // return contChiocciola && contPunto ? 'indirizzo valido': 'indirizzo non valido'
  return contChiocciola && contPunto;
}

console.log(isThisAnEmail("mail@email.com")); 
console.log(isThisAnEmail("mail_emailcom"));  


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("|--- Esercizio: 7 ---|");

function whatDayIsIt() {
  const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const dataAttuale = new Date();
  const indiceGiorno = dataAttuale.getDay();
  return giorniSettimana[indiceGiorno];
}

const giornoOggi = whatDayIsIt();
console.log('Oggi è ' + giornoOggi);


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("|--- Esercizio: 8 ---|");

function dice() {
  return Math.floor(Math.random() * 6) + 1;        // numero casuale tra 1 e 6
}

function rollTheDices(nrLanci) {
  let risult = {                                    // risult  somma totale e singoli lanci
    sum: 0,
    arrayLanci: []
  };

  for (let i = 0; i < nrLanci; i++) {          // ripeto in base a nrLanci
    let valore = dice();
    risult.sum += valore;                    // aggiungo valore a somma totale
    risult.arrayLanci.push(valore);           // agg all'array
  }

  return risult;                              
}

const risult = rollTheDices(4);
console.log(risult);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("|--- Esercizio: 9 ---|");

function howManyDays(vecchiaData) {
  const dataCorrente = new Date();                          // ottengo data corr

  const differenzaMs = dataCorrente - vecchiaData;          // calcolo differenza tra   data corrente - vecchia data

  const differenzaGg = Math.floor(differenzaMs / (1000 * 60 * 60 * 24));    // converto i ms in giorni

  return differenzaGg;
}

const vecchiaData = new Date('2023-10-23');                    // data passata
const giorniTrascorsi = howManyDays(vecchiaData);
console.log(`Sono trascorsi ${giorniTrascorsi} giorni.`);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("|--- Esercizio: 10 ---|");

function isTodayMyBirthday(dataCompleanno) {
  const dataCorrente = new Date();                      // ottengo data corr
  const giornoCorrente = dataCorrente.getDate();                  // giorno corr
  const meseCorrente = dataCorrente.getMonth() + 1;               // mese corr  i + 1

  const giornoCompleanno = dataCompleanno.getDate();               // gg compl
  const meseCompleanno = dataCompleanno.getMonth() + 1;            // mm compl

  return giornoCorrente === giornoCompleanno && meseCorrente === meseCompleanno;
}

const dataCompleanno = new Date('1988-09-21');               // data di compleanno
const oggiCompleanno = isTodayMyBirthday(dataCompleanno);

console.log(oggiCompleanno);


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("|--- Esercizio: 11 ---|");

// funzione chiamata "deleteProp"  --> 1 oggetto e 1 stringa come parametri
// cosa fa: restituisce l'oggetto, dopo aver eliminato la proprietà che ha per nome la stringa (2 parametro)

function deleteProp(oggetto, stringa) {
  if (stringa in oggetto) {
    delete oggetto[stringa];
  }
  return oggetto;
}

let ilMioOggetto = {
  prop1: "val1",
  prop2: "val2",
};

let daEliminare = "prop1";

console.log(deleteProp(ilMioOggetto, daEliminare))


//////////

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


//////////

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("|--- Esercizio: 12 ---|");

const newestMovie = (array) => {
  let annoPiuRecente = 0;
  let filmPiuRecente = null;

  array.forEach((elemento) => {                       // itero
    const anno = parseInt(elemento.Year);             // estraggo anno da elem corrente

    if (anno > annoPiuRecente) {                         // confronto se anno elem corrente è > dell anno più recente trovato finora
      annoPiuRecente = anno;                              // se si aggiorno
      filmPiuRecente = elemento;
    }
  });

  return filmPiuRecente;
};

console.log(newestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("|--- Esercizio: 13 ---|");

function countMovies(movies) {
  return movies.length;
}

const numeroDiFilm = countMovies(movies);
console.log(`Il numero totale di film è: ${numeroDiFilm}`);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("|--- Esercizio: 14 ---|");

function onlyTheYears(movies) {
  const yearsArray = movies.map(movie => movie.Year);
  return yearsArray;
}

const anniDeiFilm = onlyTheYears(movies);
console.log("Anni dei film:", anniDeiFilm);


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("|--- Esercizio: 15 ---|");

function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = movies.filter(movie => {
    const year = parseInt(movie.Year);
    return year >= 1000 && year <= 1999;
  });

  return lastMillenniumMovies;
}

const filmNelUltimoMillennio = onlyInLastMillennium(movies);
console.log("Film prodotti nel millennio scorso:", filmNelUltimoMillennio);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("|--- Esercizio: 16 ---|");

function sumAllTheYears(movies) {
  const anniDeiFilm = movies.map(movie => parseInt(movie.Year));
  const sommaAnni = anniDeiFilm.reduce((total, year) => total + year);
  return sommaAnni;
}

const risultatoSommaAnni = sumAllTheYears(movies);
console.log("Somma di tutti gli anni:", risultatoSommaAnni);


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("|--- Esercizio: 17 ---|");

function searchByTitle(titoloRicerca, movies) {
  const filmTrovati = movies.filter(movie =>
    movie.Title.toLowerCase().includes(titoloRicerca.toLowerCase())
  );

  return filmTrovati;
}

const risultatoRicerca = searchByTitle("Flies", movies);                   // parametro ricerca
console.log("Risultato della ricerca per titolo:", risultatoRicerca);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("|--- Esercizio: 18 ---|");

function searchAndDivide(titoloRicerca, movies) {
  const titoloRicercaLowerCase = titoloRicerca.toLowerCase();

  const filmCorrispondenti = movies.filter(movie =>
    movie.Title.toLowerCase().includes(titoloRicercaLowerCase)
  );
  const filmNonCorrispondenti = movies.filter(movie =>
    !movie.Title.toLowerCase().includes(titoloRicercaLowerCase)
  );

  return { match: filmCorrispondenti, unmatch: filmNonCorrispondenti };
}

const esito = searchAndDivide("Flies", movies);               // parametro ricerca
console.log("Film corrispondenti:", esito.match);
console.log("Film non corrispondenti:", esito.unmatch);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

console.log("|--- Esercizio: 19 ---|");

function removeIndex(indice, movies) {
  if (indice >= 0 && indice < movies.length) {                                // verif indice
    // Crea un nuovo array rimuovendo l'elemento all'indice specificato
    const nuovoArray = movies.slice(0, indice).concat(movies.slice(indice + 1));
    return nuovoArray;
  } else {
                                                                      // se indice non valido non modificare
    return movies;
  }
}

const indiceDaRimuovere = 8;                                       // indice
const nuovoArray = removeIndex(indiceDaRimuovere, movies);
console.log("Nuovo array dopo la rimozione:", nuovoArray);


/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log("|--- Esercizio: 20 ---|");

function selezionaIlContainer() {
  const elementoContainer = document.getElementById("container");
  return elementoContainer;
}

const container = selezionaIlContainer();
console.log(container);


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("|--- Esercizio: 21 ---|");

function selezionaTuttiTagTd() {
  const tuttiTagTd = document.querySelectorAll('td');
  return tuttiTagTd;
}

const tdElements = selezionaTuttiTagTd();
console.log(tdElements);


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("|--- Esercizio: 22 ---|");

function stampaTestoTagTd() {
  const tuttiTagTd = document.querySelectorAll('td');
  tuttiTagTd.forEach(td => {
    console.log(td.textContent);
  });
}

stampaTestoTagTd();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log("|--- Esercizio: 23 ---|");

function aggiungiBgAiLink() {
  const tuttiIlink = document.querySelectorAll('a');

  tuttiIlink.forEach(link => {
    link.style.backgroundColor = 'red';
  });
}

aggiungiBgAiLink();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log("|--- Esercizio: 24 ---|");

function aggiungiElementoALista() {
  const nuovoElemento = document.createElement('li');
  nuovoElemento.textContent = 'Nuovo elemento lista';
  const lista = document.getElementById('myList');
  lista.appendChild(nuovoElemento);
}

aggiungiElementoALista();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("|--- Esercizio: 25 ---|");

function svuotaLista() {
  const lista = document.getElementById('myList');
    lista.innerHTML = '';  // Svuota la lista impostando il suo contenuto HTML a una stringa vuota

}

svuotaLista();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log("|--- Esercizio: 26 ---|");

function aggiungiClasseATutteLeTr() {
  const tutteLeRighe = document.querySelectorAll('tr');

  tutteLeRighe.forEach(riga => {
    riga.classList.add('test');
  });
}

aggiungiClasseATutteLeTr();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

