function solution(s) {
    let answer = 0;
    let arr = [];
    
    
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        
        const same = arr.filter((x) => x === arr[0]);
        const notSame = arr.filter((x) => x !== arr[0]);
        
        if(same.length === notSame.length){
            answer ++;
            arr = [];
        }
    }
    
    if (arr.length !== 0) {
        answer ++;
    }
    
    return answer;
}