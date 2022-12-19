function solution(n) {
    let answer = n.toString().split('').map((x) => +x);
    return Number(answer.sort((a,b) => b - a).join(''));
}