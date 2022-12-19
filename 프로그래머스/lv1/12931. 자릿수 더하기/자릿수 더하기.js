function solution(n) {
    let answer = 0;
    let arr = String(n).split('').map((x) => +x);
    
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
}