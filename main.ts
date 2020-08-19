//
// Your implementations
// 
export function updateGameScore(player1Points, player2Points): string {
    if (player1Points > player2Points) {
        return 'player1';
    }
    if (player1Points < player2Points) {
        return 'player2';
    }
}

export function decideGameWinner(game): string {
    const winner = 'plauer1'
    return winner;
}

export function printScore([player1Points, player2Points]): string {
    const score = '';
    return score;
}

