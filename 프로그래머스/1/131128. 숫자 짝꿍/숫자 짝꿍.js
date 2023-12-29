function solution(X, Y) {
    const arr = Array.from({ length: 10 }, (_, index) => index);
    let answer = '';
    
    for(let i = 0; i < arr.length; i++) {
        const numX = X.split('').filter(item => Number(item) === arr[i]).length;
        const numY = Y.split('').filter(item => Number(item) === arr[i]).length;
        
        answer += String(arr[i]).repeat(Math.min(numX, numY));
    }
    
    if (!answer) return '-1';
    if (!Number(answer)) return '0';
    
    return answer.split('').map(Number).sort((a, b) => b - a).join('');
}