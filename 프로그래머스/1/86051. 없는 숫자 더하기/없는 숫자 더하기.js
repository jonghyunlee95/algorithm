function solution(numbers) {
    const answer = numbers.reduce((a, b) => a + b);
    
    return 45 - answer;
}