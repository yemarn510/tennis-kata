
export function updateGameScore(player1Points, player2Points): string {
    /**
     * This function is for checking and comparing the gameScores.
     * If player1 points are 4 and player2 point is 0 OR player 1 
     * is 2 points more than the player 2,
     * player1 will be the winner and  vice versa.
     * 
     * args   : player1Points : number
     *          player2Points : number
     * return : string
    */

    if((player1Points == 4 && player2Points == 0) 
        || (player1Points == (player2Points + 2))){
        return 'Player 1';
    }
    else if((player2Points == 4 && player1Points == 0) 
        || (player2Points == (player1Points + 2))){
        return 'Player 2';
    }
    else { return '' }
}

export function decideGameWinner(game): string {
    /**
     * This function is for checking the input,
     * the input value is nothing or one of the players.
     * If the input value is one of the player, it 
     * returns the value.
     * 
     * args   : game : string
     * return : string
    */

    if(game != ''){
        return game;
    }
    return '';
}

export function printScore([player1Points, player2Points]): string {
    /**
     * This function is for checking points and changing to scores.
     * If the player 1 got 1 more point than the player 2, player one
     * is in advantage and vice versa.
     * If both players got 3 points, the game is 'deuce'.
     * If the above conditions are worng, it will return the scores instead.
     * 
     * args   : player1Points : number
     *          player2Points : number
     * return : string
    */

    function scoreGiver(point): string{
        if (point == 0) { return 'love' }
        else if(point == 1) { return 'fifteen'}
        else if(point == 2) { return 'thirty'}
        else if(point == 3) { return 'forty'}
        else { return ''}
    }
    if(player1Points == (player2Points + 1)){
        return 'advantage player 1';
    }
    else if(player2Points == (player1Points + 1)){
        return 'advantage player 2';
    }
    else if(player1Points == 3 && player2Points == 3){
        return 'deuce';
    }
    else{
        return ( scoreGiver(player1Points) +' - '+ scoreGiver(player2Points) ).toString();
    }
    
}