function solution(n) {
    const answer = Math.sqrt(n);
  
    if (answer % 1 === 0) return Math.pow(answer + 1, 2);
    if (answer % 1 !== 0) return -1; 
}