function solution(n) {
    let answer = Math.sqrt(n);
    
    if (answer % 1 === 0) answer = Math.pow(answer + 1, 2);
    if (answer % 1 !== 0) answer = -1; 
    
    return answer;
}