function solution(s, skip, index) {
    let answer = '';
    let alpabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,     's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < skip.length; i++) {
        alpabet = alpabet.filter(x => x !== skip[i]);
    }
    
    for (let i = 0; i < s.length; i++) {
        const idx = alpabet.indexOf(s[i]) + index;
        
        answer += alpabet[idx % alpabet.length];  
    }
    
    return answer;
}