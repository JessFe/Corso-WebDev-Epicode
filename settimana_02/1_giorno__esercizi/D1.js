/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
    I datatype in JavaScript possono essere di diversi tipi:
    numeri, stringhe, booleani, null e undefined, oggetti.

    Numeri
    I numeri in JavaScript possono essere interi, ad esempio 1 o 42,
    possono essere decimali e separati da un punto, come 3.14,
    e possono essere negativi, come -20.
    Con i numeri possiamo fare molte cose, ad esempio li possiamo sommare, sottrarre,
    moltiplicare e dividere.

    Stringhe
    La stringa è una sequenza di caratteri, contenuta tra una coppia di " oppure di '.
    Può avere diverse lunghezze: può contenere una o più parole, può essere vuota, e
    si può unire ad altre stringhe per creare frasi. 

    Booleani
    I datatype booleani sono come interruttori che possono essere accesi o spenti,
    come si e no. Servono per indicare se qualcosa è vero o falso.

    Null e Undefined
    Sono simili a scatole vuote o spazi vuoti.
    Null indica che non c'è niente in una scatola,
    mentre Undefined significa che non sappiamo ancora cosa ci sia dentro.

    Oggetti
    Infine ci sono gli oggetti. Un oggetto è come una scatola con tanti scomparti.
    In ognuno di questi scomparti possiamo inserire cose diverse.
    Ad esempio un oggetto può avere diverse informazioni su una persona come nome, cognome,
    età, e molto altro. 
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  // var name = 'Jessica'
  // console.log('Il mio nome è', name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  // var num1 = 12;
  // var num2 = 20;
  // console.log('La somma di 12 e 20 è:', num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    // var x = 12;
    // console.log('x è uguale a', x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    // // fase 1 - riassegno name (attivare in esercizio 2):
    // var name = 'Ferro'
    // console.log('Il nuovo valore di name è', name);

    // // fase 2 - una variabile dichiarata con var può essere riassegnata:
    // var anno = 2023;
    // console.log('Siamo nell\'anno', anno);
    // var anno = 3000;
    // console.log('Prova variazione: anno futuro =', anno);

    // // fase 3 - una variabile dichiarata con cost NON può essere riassegnata:
    // const anno = 2023;
    // console.log('Siamo nell\'anno', anno);
    // var anno = 3000;
    // console.log('Prova variazione: anno futuro =', anno);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    // // attivare variabile x in esercizio 4
    // console.log('4 - x fa:', 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    // var name1 = 'john';
    // var name2 = 'John';
    // console.log('Il primo nome è diverso dal secondo?');
    // (name1 != name2) ? console.log("Si, è diverso") : console.log("No, non è diverso");    // <- Operatore ternario: combina tre dati tra di loro

    // // EXTRA
    // console.log('E adesso il primo nome è diverso dal secondo?');
    // (name1.toLowerCase() != name2.toLowerCase()) ? console.log("Si, è diverso") : console.log("No, non è diverso");

