function solution(board, moves) {
    let answer = 0;
    let box = [];
    moves = moves.map(x => x - 1);
    
    for (let i = 0; i < moves.length; i++) {
        let idx = moves[i];
        for (let j = 0; j < board.length; j++) {
            if (board[j][idx] !== 0) {
                if (box.at(-1) === board[j][idx]) {
                    box.pop();
                    answer += 2;
                } else {
                    box.push(board[j][idx]);
                }
                board[j][idx] = 0;
                break;
            } 
        }
    }
    return answer;
}