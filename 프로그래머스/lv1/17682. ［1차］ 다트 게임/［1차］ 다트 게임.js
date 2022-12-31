function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let arr = [];
    
    
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            score = dartResult[i]; 
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                score = 10;
                i++;
            }
        }
        if (dartResult[i] === 'S') {
            arr.push(Number(score));
            }
        if (dartResult[i] === 'D') {
            arr.push(Math.pow(score, 2));
        }
        if (dartResult[i] === 'T') {
            arr.push(Math.pow(score, 3));
        }
        if (dartResult[i] === '*') {
            arr[arr.length - 2] *= 2;
            arr[arr.length - 1] *= 2;
        }
        if (dartResult[i] === '#') {
            arr[arr.length - 1] *= -1;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i]);
    }
    
    return answer;
}