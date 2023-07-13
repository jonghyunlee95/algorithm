function solution(dirs) {
    let move = { 
        L: [-1, 0],
        R: [1, 0],
        U: [0, 1], 
        D: [0, -1]
    };
    let answer = [0, 0];
    let route = new Set();
    
    for (let dir of dirs) {
        let X = answer[0] + move[dir][0];
        let Y = answer[1] + move[dir][1];
        
        if (X > 5 || X < -5 || Y > 5 || Y < -5) continue;
        
        route.add("" + answer[0] + answer[1] + X + Y);
        route.add("" + X + Y + answer[0] + answer[1]);
        
        answer = [X, Y];
    }
    
    return route.size / 2;
}