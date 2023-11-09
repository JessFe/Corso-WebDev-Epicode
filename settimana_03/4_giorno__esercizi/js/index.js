function creaTabellone() {
    const tabelloneDiv = document.getElementById('tabellone');  // aggancio html con id tabellone
    const totaleNumeri = 76;                                // totale numeri tombola

    for (let i = 1; i <= totaleNumeri; i++) {                // creo ciclo (da 1 a totaleNumeri) per creare e numerare le celle del tabellone
        const cellaNumerata = document.createElement('div');  // creo div per ogni cella 
        cellaNumerata.classList.add('cella-tabellone');       // gli assegno la classe cella-tabellone
        cellaNumerata.innerText = i;                          // inserisco nella cella il valore corrente di "i"
        tabelloneDiv.appendChild(cellaNumerata);              // appendo il div cella al tabellone
    }
}

function estraiNumero() {
    const totaleNumeri = 76;
    const numEstratto = Math.floor(Math.random() * totaleNumeri) + 1;       // genero un numero casuale da 1 a totaleNumeri

    const numeroEstrattoDiv = document.getElementById('numeroEstratto');
    numeroEstrattoDiv.innerText = `Numero estratto: ${numEstratto}`;

    const celleTabellone = document.querySelectorAll('.cella-tabellone');   // recupero tutte le celle del tabellone e le metto in una variabile per fare un foreach
    celleTabellone.forEach((cella, index) => {                    // per ogni cella
        if (index + 1 === numEstratto) {                         // verifico se corrisponde al numero estratto (+1 per partire da 1 e non da 0)
            cella.classList.add('evidenzia');                    // se è vero aggiungo la classe
        }
    });
    evidenziaCartelline(numEstratto);                            // passo il numero a evidenziaCartelline
}

function generaCartelline() {
    const numeroCartelline = document.getElementById('numeroCartelline').value;   // prendo il nr cartelline dall'input
    const cartellineDiv = document.getElementById('cartellineDiv');           // recupero il div dove stampare le cartelline
    cartellineDiv.innerHTML = '';                                              // svuoto da eventuali cartelline precedenti

    for (let i = 0; i < numeroCartelline; i++) {                             // ciclo per creare ogni cartellina
        const cartella = document.createElement('div');                       // creo un div per la cartellina
        cartella.classList.add('cartella');                                    // gli aggiungo la sua classe
        cartella.innerHTML = '<h3>Cartellina ' + (i + 1) + '</h3>';            // nome cartellina
        
        for (let j = 0; j < 24; j++) {                                      // ciclo per creare le 24 celle
            const numeroCasuale = Math.floor(Math.random() * 76) + 1;        // genero numero casuale da 1 a 76 per riempire ogni cella
            const cellaCartella = document.createElement('div');              // creo div per ogni cella 
            cellaCartella.classList.add('cella-tabellone');                   // aggiungo la classe
            cellaCartella.innerText = numeroCasuale;                           // assegno numeroCasuale generato alla cella
            cartella.appendChild(cellaCartella);                              // appendo la cella alla cartellina
        }
        cartellineDiv.appendChild(cartella);                              // aggiungo la cartellina con le sue celle al div per visualizzarla nella pagina
    }
}

function evidenziaCartelline(numero) {                                        // numero da estraiNumero (riga 23)
    const cartelle = document.querySelectorAll('.cartella .cella-tabellone');  // recupero le celle delle cartelline e le metto in una variabile per fare un foreach
    cartelle.forEach((cella) => {                                     // per ogni cella
        if (cella.innerText === numero.toString()) {                   // verifico se corrisponde al numero estratto
            cella.classList.add('evidenzia');                         // se è vero aggiungo la classe
        }
    });
}




creaTabellone();