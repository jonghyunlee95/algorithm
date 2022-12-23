function solution(n, m) {
    const answer = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let max = 0;
    let min = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr1.push(i);
    }
    
    for (let j = 1; j <= m; j++) {
        if (m % j === 0) arr2.push(j);
    }
    
    for (let k = 0; k < arr1.length; k++) {
        if (arr2.includes(arr1[k])) arr3.push(arr1[k]);
    }
    
    max = Math.max(...arr3);
    arr1 = [];
    arr2 = [];
    arr3 = [];
    
    for (let l = 1; l <= Math.max(n, m); l++) {
        arr1.push(n * l);
        arr2.push(m * l);
    }
    
    for (let q = 0; q < arr1.length; q++) {
        if (arr2.includes(arr1[q])) arr3.push(arr1[q]);
    }
    
    min = Math.min(...arr3);
    answer.push(max, min);
   
    return answer;
}