function solution(n) {
    let answer = 0;
    const arr = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
    }
    
    return arr[n] % 1234567;
}