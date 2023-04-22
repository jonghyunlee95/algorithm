function solution(n) {
    const arr = String(n).split('').map((x) => +x);

    return arr.reduce((a, b) => a + b);
}