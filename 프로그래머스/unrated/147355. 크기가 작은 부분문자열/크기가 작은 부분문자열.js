function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        let str = t.slice(i, i + p.length);
        
        if (str === p || str < p) answer++;
    }
    
    return answer;
}