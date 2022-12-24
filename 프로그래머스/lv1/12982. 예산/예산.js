function solution(d, budget) {
    let arr = d.sort((a, b) => a - b);
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (sum <= budget) answer++;
        else break;
    }
    return answer;
}