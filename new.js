*/

/* Declare your vaiables  */

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


// the bottom code changes the CSS to display the image as none
    document.querySelector('.dice').style.display = 'none';


/* set up event handler  */


document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the roundscore IFthe rolled number was not a 1

})






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