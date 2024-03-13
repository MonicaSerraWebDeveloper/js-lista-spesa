// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

const myUl = document.querySelector('.shop-list');
console.log(myUl);

for (let i = 0; i < list.length; i++) {
    let listArray = list[i];

    myUl.innerHTML += `<li>${listArray}</li>`
}

// Scorriamo l'intera lista 
// Prendiamo ogni singola voce
// Aggiungiamola nel DOM