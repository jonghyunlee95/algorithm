function solution(s) {
    const answer = [];
    const arr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
            answer.push(-1); 
        } else {
            let idx = arr.lastIndexOf(s[i]);
            arr.push(s[i]);
            answer.push(i - idx);
        }
    }
    return answer;
}