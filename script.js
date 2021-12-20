// L’utente indica un livello di difficoltà in base al quale
// viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Definisco variabili utili
const griglia = document.getElementById("griglia");

// Selezioni difficoltà
// document.getElementById("facile").addEventListener("click", diffFacile());
// document.getElementById("medio").addEventListener("click", diffMedio());
// document.getElementById("difficile").addEventListener("click", diffDifficile());

// Bottone test
// document.getElementById("genera").addEventListener("click", diffFacile);


// function diffFacile() {
  for (i=1; i<11; i++) {
    griglia.innerHTML += `<div id="riga${i}" class="riga"></div>`;
    
    
    for (i2=1; i2<11; i2++) {
      document.getElementById("riga" + i).innerHTML += `<div id="cella${i2}" class="cella">${i2}</div>`;
    }
    
  }
  // }
