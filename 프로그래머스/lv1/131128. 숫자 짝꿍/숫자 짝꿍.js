function solution(X, Y) {
    let answer = '';
    X = X.split('');
    Y = Y.split('');
    
    for (let i = 0 ; i < 10 ; i ++) {
        const arr1 = X.filter(x => Number(x) === i).length;
        const arr2 = Y.filter(x => Number(x) === i).length;
        
        answer += String(i).repeat(Math.min(arr1, arr2));
    }
    
    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0';
    
    return answer.split('').sort((a, b) => Number(b) - Number(a)).join('');
}
