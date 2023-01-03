function solution(k, score) {
    const arr = [];
    const answer = [];
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            arr.push(score[i]);
        }
        
        if (score[i] > Math.min(...arr)) {
            arr.pop();
            arr.push(score[i]);
            arr.sort((a, b) => b - a);
        }
        
        answer.push(arr[arr.length - 1]);
    }
    
    return answer;
}
