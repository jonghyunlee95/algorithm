function solution(s) {
    let answer = true;
                
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s.length !== 4 && s.length !== 6) return false;
    }
    return answer;
}