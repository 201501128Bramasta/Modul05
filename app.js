var scores, roundscore, activePlayer, gameplaying, skormax;

init();

function konfirm() {
    var skor = document.getElementById("skor").value ;
    document.getElementById("demo").innerHTML = skor;
    skormax = skor;
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameplaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var diceDOM1 = document.querySelector('.dice1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        
        if(dice !== 1 && dice1 !== 1) {
            roundscore += dice + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        } else {
            activePlayer[roundscore] = 0;
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gameplaying) {
        scores[activePlayer] += roundscore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= skormax) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundscore = 0;
    gameplaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('Winner');
    document.querySelector('.player-1-panel').classList.remove('Winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}