console.log('Game JavaScript file');

var score = [0, 0];
var roundScore = 0;
var players = [0, 1];
var activePlayer = 0;
var gamePlaying = true;


var dice;

// hide the dice when page load
function initEvents() {

    score = [0, 0];
    roundScore = 0;
    players = [0, 1];
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.getElementById('score--0').innerHTML = "0";
    document.getElementById('score--1').innerHTML = "0";
    document.getElementById(`current--0`).innerHTML = "0"
    document.getElementById(`current--1`).innerHTML = "0"
    gamePlaying = true
}

initEvents();



document.querySelector('.btn--roll').addEventListener('click', function (e) {
    e.preventDefault()

    if (gamePlaying) {
        // 1. Generate Random Number
        dice = Math.floor(Math.random() * 6) + 1;


        //2. change dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = `./img/dice-${dice}.png`;

        // 3. Display Number user Inter face

        if (dice !== 1) {
            roundScore += dice
            let current = document.getElementById(`current--${activePlayer}`)
            current.innerHTML = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }



})

// Holde the Score 
document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        score[activePlayer] += roundScore;
        document.getElementById(`score--${activePlayer}`).innerHTML = score[activePlayer];

        // if player win

        if (score[activePlayer] >= 10) {
            document.getElementById(`name--${activePlayer}`).innerHTML = "Winner"
            gamePlaying = false;
        }

        // next player
        nextPlayer();

    }

})


// next player function
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Change the user interface style
    document.getElementById(`current--0`).innerHTML = "0"
    document.getElementById(`current--1`).innerHTML = "0"
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', initEvents);


/*
// your 3 chalange

1. A player loose his Entire score when he roll two 6 in a row. after that it's the next
player's turn



*/


