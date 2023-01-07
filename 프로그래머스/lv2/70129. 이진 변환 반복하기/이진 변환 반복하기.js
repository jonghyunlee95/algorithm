function solution(s) {
    let answer = [];
    let cntZero = 0;
    let cntTransForm = 0; 
    
    while (s !== '1') {
        s = s.split('');
        
        for (let i = 0; i < s.length; i++) {
            if(s[i] === '0') cntZero++;
        }
        
        s = s.filter(x => x !== '0').join('').length.toString(2);
        cntTransForm++;
        
    }
    
    answer.push(cntTransForm, cntZero);
    
    return answer;
}