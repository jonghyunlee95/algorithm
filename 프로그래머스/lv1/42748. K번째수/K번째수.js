function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let arr = [];
        let first = commands[i][0] - 1;
        let last = commands[i][1] - 1;
        let idx = commands[i][2] - 1;
        
        for (let j = first; j <= last; j++) {
            arr.push(array[j]);
        }
        
        arr.sort((a, b) => a - b);
        answer.push(arr[idx]);
    }
    
    return answer;
}