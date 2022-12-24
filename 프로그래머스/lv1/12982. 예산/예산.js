function solution(d, budget) {
    let arr = d.sort((a, b) => a - b);
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        budget -= arr[i];
        
        if (budget >= 0) answer++;
        else break;
    }
    return answer;
}