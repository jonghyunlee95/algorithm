function solution(s) {
    let count = [0, 0];
    let str = s[0];
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === str) count[0]++;
        else count[1]++;
        
        if (count[0] === count[1]) {
            str = s[i + 1];
            answer++;
            count = [0, 0];
        } 
    }
    return count[0] !== count[1] ? answer + 1 : answer
}