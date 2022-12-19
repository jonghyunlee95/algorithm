function solution(n) {
    let answer = [];
    let arr = n.toString().split('').map((x) => +x);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(arr[i]);
    }
    return answer;
}