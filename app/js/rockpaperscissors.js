////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var game1 = 'rock';
    var game2 = 'scissors';
    var game3 = 'paper';

    if ((playerMove === game1 && computerMove === game2) || (playerMove === game2 && computerMove === game3) || (playerMove === game3 && computerMove === game1)) {
            winner = 'player';
    } else if ((computerMove === game1 && playerMove === game2) || (computerMove === game2 && playerMove === game3) || (computerMove === game3 && playerMove === game1)) {
            winner = 'computer';
    } else {
            winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;
    var maxWins = 5;


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < maxWins && computerWins < maxWins) {      
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
    
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } 
        
        var whoWins = '';
        var totalGames = 0;
        if (playerWins === maxWins) { 
            whoWins = 'YOU are';
            
        }
        
        if (computerWins === maxWins) { 
            whoWins = 'COMPUTER is';
        }
        
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === maxWins || computerWins === maxWins) {
            totalGames = playerWins + computerWins;
            
            console.log('Total games played are '+ totalGames + '. And ' +whoWins+ ' the WINNER!');     
        }    
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < x && computerWins < x) {      
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
    
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } 
        
        var whoWins = '';
        var totalGames = 0;
        if (playerWins === x) { 
            whoWins = 'YOU are';
            
        }
        
        if (computerWins === x) { 
            whoWins = 'COMPUTER is';
        }
        
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === x || computerWins === x) {
            totalGames = playerWins + computerWins;
            
            console.log('Total games played are '+ totalGames + '. And ' +whoWins+ ' the WINNER!');
        }
    }
    return [playerWins, computerWins];
}
