function solution(num) {
    let answer = '';
    if (num % 2 === 0) answer = 'Even';
    if (num % 2 !== 0) answer = 'Odd';
    return answer;
}