function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let weakNumber = 0;
        
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                weakNumber++;
            }
        }
        
        weakNumber += 1;
        
        if (weakNumber > limit) {
            answer += power;
        } else {
            answer += weakNumber;
        }
    }
    
    return answer;
}