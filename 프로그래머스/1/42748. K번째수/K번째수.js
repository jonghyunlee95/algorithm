function solution(array, commands) {
    const answer = [];
    
    commands.map((item) => {
        const [start, end, findIdx] = item;
        
        answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[findIdx - 1]);
    })
   
    return answer;
}