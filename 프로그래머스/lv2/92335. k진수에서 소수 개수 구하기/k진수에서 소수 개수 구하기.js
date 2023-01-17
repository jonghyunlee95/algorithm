function primeNumber(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    let answer = 0;
    const arr = n.toString(k).split('0');
    
    for (let i = 0; i < arr.length; i++) {
        if (primeNumber(Number(arr[i]))) answer++;
    }
    
    return answer;
}