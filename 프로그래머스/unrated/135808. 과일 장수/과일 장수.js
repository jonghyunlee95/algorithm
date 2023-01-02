function solution(k, m, score) {
    let answer = 0;
    let idx = m - 1;
    score.sort((a, b) => b - a);
    
    
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        answer += score[idx] * m;
        
        idx += m;
    }
    
    return answer;
}