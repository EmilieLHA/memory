// DOM selections

let allFlips = document.querySelectorAll('.flip');
let allCards = document.querySelectorAll('.card');
let overlay = document.querySelector('.overlay');

//Variable creation

let firstCard, secondCard;
let alreadyFlippedCard = false;
let numberOfFlippedCards = 0;
let numberOfPairedCards = 0;

// Génération aléatoire de la grille 

let index = [1,2,3,4,5,6,7,8,9,10,11,12];
let newGrid = [];

for(let i=1; i<13; i++) {
    let item = index[Math.floor(Math.random()*index.length)];
    newGrid.push(item);  
    index.splice(index.indexOf(item), 1);
}

console.log(newGrid);

// Remplissage de la grille

for (let i=0; i<12; i++){
    let childNode = allFlips[i].childNodes[1];
    childNode.remove();
    // console.log(newGrid[i]-1);
    // console.log(allCards[newGrid[i]-1]);
    allFlips[i].appendChild(allCards[newGrid[i]-1]);
}

// Game

allCards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard(e) {

    if(numberOfFlippedCards < 2){

        e.currentTarget.classList.toggle('active');

        if (!alreadyFlippedCard) {
            
            firstCard = e.currentTarget;
            alreadyFlippedCard = true;
            numberOfFlippedCards = 1;

            firstCard.removeEventListener('click', flipCard);
    
        } else {
            alreadyFlippedCard = false;
            secondCard = e.currentTarget;
            numberOfFlippedCards = 2;
            
            checkCards(firstCard, secondCard);

            firstCard.addEventListener('click', flipCard);
        }  
    } else {

        return;
    }
  
}

function checkCards(firstCard, secondCard) {

    if (firstCard.dataset.key == secondCard.dataset.key) {
        numberOfPairedCards+=2;

        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        if(numberOfPairedCards==12) {
            overlay.classList.add('slide-in-bottom');
        }

        numberOfFlippedCards = 0;

    } else {
        // console.log('essaie-encore');
        setTimeout(() => {
            firstCard.classList.remove('active');
            secondCard.classList.remove('active');
            alreadyFlippedCard = false;
            numberOfFlippedCards = 0;
        }, 900);

    }

    
}
