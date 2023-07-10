function solution(board) {
    const dir = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, 1], [1, -1], [1, 1], [-1, -1]];
    let answer = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                dir.map((item) => {
                    const x = item[0] + i;
                    const y = item[1] + j;
                    
                    if (x >= 0 && 
                        x < board.length && 
                        y >= 0 && y < board[i].length && 
                        board[x][y] === 0) {
                     board[x][y] = 'x';   
                    }
                })
            }
        }
    }
    
    board.map((item1) => item1.map((item2) => item2 === 0 ? answer++ : 0));
    
    return answer;
}