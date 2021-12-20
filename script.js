// L’utente indica un livello di difficoltà in base al quale
// viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


// Definisco variabili utili
const griglia = document.getElementById("griglia");
let cella = document.getElementsByClassName("cella");
const diffSet = document.getElementById("select");


// Selezioni difficoltà
document.getElementById("facile").addEventListener("click", diffFacile);
document.getElementById("medio").addEventListener("click", diffMedio);
document.getElementById("difficile").addEventListener("click", diffDifficile);

// Funzioni
function diffFacile() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "medio", "difficile");
  griglia.classList.add("animazione", "facile");
  for (i=1; i<101; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

function diffMedio() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "facile", "difficile");
  griglia.classList.add("animazione", "medio");
  for (i=1; i<82; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

function diffDifficile() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "facile", "medio");
  griglia.classList.add("animazione", "difficile");
  for (i=1; i<50; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

// Click sulla cella
function cellaAzzurra() {
  for (i=0; i<cella.length; i++) {
    cella[i].addEventListener("click", function(){
      this.classList.add("azzurro");
    });
  }
}