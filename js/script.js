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

const myUlFor = document.querySelector('.shop-list');

for (let i = 0; i < list.length; i++) { // Scorriamo l'intera lista 
    let listArrayFor = list[i]; // Prendiamo ogni singola voce

    myUlFor.innerHTML += `<li>${listArrayFor}</li>` // Aggiungiamola nel DOM
}

let i = 0;
while (i < list.length) {
    console.log(list[i]);

    i++
}

