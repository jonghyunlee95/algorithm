function solution(n, times) {
    const arr = times.sort((a, b)=> a - b);
    let left = 1;
    let right = times[times.length - 1] * n;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((a, b) => a + Math.floor(mid / b), 0);
        
        if (sum < n) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
}