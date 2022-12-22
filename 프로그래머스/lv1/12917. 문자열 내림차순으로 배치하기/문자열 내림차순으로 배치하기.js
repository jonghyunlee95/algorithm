function solution(s) {
    const answer = [];
    const arr = [];
    
    for (let i = 0; i < s.length; i++) {
        answer.push(s.charCodeAt(i));   
    }
    
    answer.sort((a, b) => b - a);
    
    for (let j = 0; j < answer.length; j++) {
        arr.push(String.fromCharCode(answer[j]));
    }
    
    return arr.join('');
}