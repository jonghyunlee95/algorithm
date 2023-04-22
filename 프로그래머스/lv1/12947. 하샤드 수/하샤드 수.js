function solution(x) {
    const sum = x.toString().split('').map((x) => +x).reduce((a, b) => a + b);
    
    if (x % sum === 0) return true;
    if (x % sum !== 0) return false;
}