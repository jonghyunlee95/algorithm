function solution(n) {
    let answer = 0;
    let condition = true;
    const cnt1 = n.toString(2).split('').filter(x => x === '1').length;
    
    for (let i = n + 1; condition; i++) {
        const cnt2 = i.toString(2).split('').filter(x => x === '1').length;
        
        if (cnt1 === cnt2) {
            answer = i;
            break;
        } 
    }
    
    return answer;
}