function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const idx = commands[i][2] - 1;
        
        answer.push(
            array.slice(commands[i][0] - 1, commands[i][1])
                 .sort((a, b) => a - b)[idx]
        );
    }
    
    return answer;
}