window.addEventListener('DOMContentLoaded', () => {

    // Pulling in html elements using DOM selectors
    const squares = Array.from(document.querySelectorAll('.square'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');


    // sets up the board
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    // stores the currently playing player
    let currentPlayer = 'O';

    // checks if the game is currently in play
    let isGameActive = true;



    // constant variables used as win conditions for the game

    const playerOWON = 'playerO-WON';
    const playerXWON = 'playerX-WON';
    const tie = 'tie';


    // A const multidimensional array, storing all of the possible positions, needed for a player to win

    const winConditionsArray = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]

    ];

    // check if there is a winner, by checking the 'winConditionsArray' to see if the array matches the given wind condition

    function resultValidation(){

        let gameWon = false;

        for(let i = 0; i <= 7; i++){
            const winCondition = winConditionsArray[i];
            const a = gameBoard[winCondition[0]];
            const b = gameBoard[winCondition[1]];
            const c = gameBoard[winCondition[2]];

            if(a === '' ||  b === '' || c === ''){
                continue;
            }

            if(a === b && b === c){
                gameWon = true;
                break;
            }

        }

        if (gameWon){
            announce(currentPlayer === 'X' ? playerXWON : playerOWON);
            isGameActive = false;
            return;
        }

        if(!gameBoard.includes(''))
            announce(tie);

    }

    

    

    

    const boardUpdate = (index) => {
        gameBoard[index] = currentPlayer;
    };

    


    // Loop through the 'squares' array, and add an event listener to each individual square on the board


    squares.forEach( (square, index) => {
        square.addEventListener('click',  () => playerClicked(square, index));
    });





    const validMoveCheck = (square) => {
        if(square.innerText === 'X' || square.innerText === 'O'){
            return false;
        }
        
        return true;
    };


    // changes the active player
    const playerChange = () =>{
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    };

    // function to display to the user, who has won
    const announce = (type) =>{
        switch(type){
            case playerOWON:
                announcer.innerHTML = 'Player <span class="o-player">O</span> has won';
                break;
            case playerXWON:
                announcer.innerHTML = 'Player <span class="x-player">X</span> has won';
                break;
            case tie:
                announcer.innerText = "It's a tie!";
        }
        announcer.classList.remove('hide');
    }

    


    
    // function to represent a single turn within the game
    const playerClicked = (square, index) => {

        if(validMoveCheck(square) & isGameActive){

            square.innerText = currentPlayer;
            square.classList.add(`player${currentPlayer}`);

            boardUpdate(index);
            resultValidation();
            playerChange();

        }


    }




    const resetBoard = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        isGameActive =  true;
        announcer.classList.add('hide');

        if(currentPlayer === 'O'){
            playerChange();
        }

        squares.forEach(square => {
            square.innerText = '';
            square.classList.remove('o-player');
            square.classList.remove('x-player');
        });

    }



    // Adds event listener for the reset button
    resetButton.addEventListener('click', resetBoard);

});