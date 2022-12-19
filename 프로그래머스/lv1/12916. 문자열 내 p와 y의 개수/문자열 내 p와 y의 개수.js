function solution(s){
    let answer = true;
    let word = s.toLowerCase();
    let p = 0;
    let y = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'p') p++;
        if (word[i] === 'y') y++;
    }
    
    if (p === y) return answer;
    if (p !== y) answer = false;

    return answer;
}