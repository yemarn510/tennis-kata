//
// Your implementations
// 

export function updateGameScore(player1Points, player2Points): string {
    if (player1Points > player2Points) {
        return 'Player 1';
    }
    if (player1Points < player2Points) {
        return 'Player 2';
    }
}

export function decideGameWinner(game): string {
    const winner = 'Player 1'
    return winner;
}

export function printScore([player1Points, player2Points]): string {
    const score = '';
    return score;
}

//docker run --rm --workdir /app/ --volume $PWD:/app/ node:12-alpine sh -c 'npm install && npm run test'