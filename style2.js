   // Check if player won the game

   if(scores[activePlayer] >= 20){

    document.querySelector('#name-' + activePlayer).textContent = "Winner!";
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

} else {


    nextPlayer();

}