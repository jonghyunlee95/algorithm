function solution(s) {
    const answer = [0, 0];

    
    while(s !== '1') {
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '0') answer[1]++;
        }
        
        s = s.split('').filter(a => a === '1').join('').length.toString(2);
        answer[0]++;
    }
    
    return answer;
}