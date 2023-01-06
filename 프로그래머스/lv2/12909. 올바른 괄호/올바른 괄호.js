function solution(s){
    let answer = true;
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') cnt += 1;   
        if (s[i] === ')') cnt -= 1;
        if (cnt < 0) return false;
    }
    
    if (cnt === 0) {
        return answer;
    } else {
        return false;
    }
}