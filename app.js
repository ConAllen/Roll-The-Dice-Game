/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



/* Declare your vaiables  */

var scores, roundScore, activePlayer;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;


// the bottom code changes the CSS to display the image as none
document.querySelector('.dice').style.display = 'none';

// sets the ID's to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';




/* set up event handler for the button roll  */

document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the roundscore IF the rolled number was not a 1
    //!== doesnt user type coercin
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-'  + activePlayer ).textContent = roundScore;

    } else {

        nextPlayer();

        //document.querySelector('.dice').style.display = 'none';
        // removes the class of player-o-panel so that when
       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');

    }


});

        // event handler for Hold button

document.querySelector('.btn-hold').addEventListener('click', function() {

        // Add CURRENT score to GLOBAL Score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {

            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');


        } else {

            // Check if player won the game
            nextPlayer();

        }


    });



function nextPlayer() {

         //Next player Ternary Opperator
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0;

         // changes the current score to 0
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';

         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');

         document.querySelector('.dice').style.display = 'none';
}









/* how the maths works

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

*/

/* great way to select content.
 this line is selecting the current-0 and the active playervariable and saying the text content
 is equal to the score of the dice  */

 /* change the text to the dice roll  */

//document.querySelector('#current-'  + activePlayer ).textContent = dice;

//document.querySelector('#current-'  + activePlayer ).innerHTML = '<em>' + dice + '</em>';

/*  THIS IS KNOWN AS A GETTER, AS IT GETS INFO
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/