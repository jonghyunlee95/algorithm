function solution(keyinput, board) {
    const direction = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0]
    };
    const row = Math.floor(board[0] / 2);
    const col = Math.floor(board[1] / 2);
    let answer = [0, 0];
    
    for (let i = 0; i < keyinput.length; i++) {
        const input = keyinput[i];
        
        answer[0] += direction[input][0];
        answer[1] += direction[input][1];
        
        if (Math.abs(answer[0]) > row && answer[0] < 0) answer[0] = -row;
        if (Math.abs(answer[1]) > col && answer[1] < 0) answer[1] = -col;
        if (answer[0] > row) answer[0] = row;
        if (answer[1] > col) answer[1] = col;
    }
    
    
    return answer;
}