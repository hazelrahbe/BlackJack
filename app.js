let suits = ['diamonds', 'hearts', 'clubs', 'spades'];
let points = ['K', 'Q', 'J', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10];
let playerHand = []
let dealerHand = []
let ace  = 0;
let decorAce = 0;

let deck = [];
function deckTable() {
     for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < points.length; j++) {
            let card = {suite: suits[i] , points: points[j]}
            deck.push(card)
        }
    }
    return deck.sort( () => .5 - Math.random() );
}
console.log(deckTable())

let newGame = document.querySelector('.newGame')
let hitBtn = document.querySelector('.hitBtn')
let stayBtn = document.querySelector('.stayBtn')
let playerCard = document.querySelector('.player')
let dealerCard = document.querySelector('.dealer')
let htmlWin = document.querySelector(".win")


function startGame() {
    playerHand = []
    let playerCard1 = deck.pop()
    let playerCard2 = deck.pop()
    playerHand.push(playerCard1)
    playerHand.push(playerCard2)
    document.querySelector('.playerText').innerHTML = (playerHand)
    document.querySelector('.playerText').innerHTML = (calculateTotal(playerHand))
    appendCard(playerHand[0], playerCard)
    appendCard(playerHand[1], playerCard)

    dealerHand = []
    let dealerCard1 = deck.pop()
    let dealerCard2 = deck.pop()
    dealerHand.push(dealerCard1)
    dealerHand.push(dealerCard2)
    document.querySelector('.dealerText').innerHTML = (dealerHand)
    document.querySelector('.dealerText').innerHTML = (calculateTotal(dealerHand))
    appendCard(dealerHand[0], dealerCard)
    appendCard(dealerHand[1], dealerCard)  
    console.log(deck)

}
 
newGame.addEventListener('click', startGame)

function checkAce(playerHand) {
    if ( calculateTotal(playerHand) > 21 ) {
        (hand['A'].points = 1)
        calculateTotal +=1
    }
}

function checkAce(dealerHand) {
    if ( calculateTotal(dealerHand) > 21) {
        (hand['A'].points = 1)
        calculateTotal +=1
    }
}

function calculateTotal(hand) {
    let total = 0;
    for(let i = 0; i < hand.length; i++) {
        if(hand[i].points === 'J' || hand[i].points === 'Q' || hand[i].points === 'K') total += 10;
        else if(hand[i].points === 'A') total += 11;
        else total += parseInt(hand[i].points);
        console.log(total)
    }
    console.log(hand)
    
    return total;
}

function hitMe() {
    playerHand.push(deck[0])
    deck.splice(0, 1)
    appendCard(playerHand[playerHand.length - 1], playerCard)
    document.querySelector('.playerText').innerHTML = calculateTotal(playerHand)
    // checkPoints()
    if (calculateTotal(playerHand) > 21) {
        // document.querySelector('.playerText').innerHTML = (playerHand)
        // document.querySelector('.dealerText').innerHTML = (dealerHand)
        document.querySelector('.dealerText').innerHTML = calculateTotal(dealerHand)
        htmlWin.innerHTML = ("You lose")
    }
//     if (dealerHand < 17) {
//     dealerHand.push(deck[0])
//     deck.splice(0, 1)
//     appendCard(dealerHand[0], dealerCard)

//     document.querySelector('.dealerText').innerHTML = (dealerHand)
//     document.querySelector('.dealerText').innerHTML = (calculateTotal(dealerHand))
// }
}

hitBtn.addEventListener('click', hitMe)

function skipMe() {
    if (calculateTotal(dealerHand) < 17) {
    dealerHand.push(deck[0])
        deck.splice(0, 1)
        appendCard(dealerHand[dealerHand.length - 1], dealerCard)
        // document.querySelector('.playerText').innerHTML = (playerHand)
        // document.querySelector('.playerText').innerHTML = (dealerHand)
        // (playerHand, dealerHand)
        document.querySelector('.dealerText').innerHTML = calculateTotal(dealerHand)

    skipMe();
    }
    else if (calculateTotal(dealerHand) > 21) {
        console.log(dealerHand)
        htmlWin.innerHTML = "You Win! Dealer Lose!"
    }
    else {
        checkPoints()
    }
}

stayBtn.addEventListener('click', skipMe)

function checkPoints() {
    if ( calculateTotal(playerHand) === 21) {
        htmlWin.innerHTML = "BlackJack! You Win!";
        // console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    else if (calculateTotal(dealerHand) === 21) {
        html
    }
    else if (calculateTotal(dealerHand) > 21 ) {
        htmlWin.innerHTML = "You Win! Dealer Lose!"
    }
    else if (calculateTotal(playerHand) > calculateTotal(dealerHand)){
        htmlWin.innerHTML = "You Win! Dealer Lose!";
        // console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    else {
        htmlWin.innerHTML = "Its Draw"
    }
}

function appendCard(card, turn) {
    console.log(card)
    let img = document.createElement('img')
    img.src = `./PNG-cards-1.3/${card.points}_of_${card.suite}.png`
    turn.appendChild(img)
    img.style.width = '80px'
    img.style.height = '120px'
}

function reset(){  
    document.querySelector('').reset();  
  }