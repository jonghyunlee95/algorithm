function solution(arr, divisor) {    
    arr = arr.filter(x => x % divisor === 0);
    
    if(arr.length === 0) return [-1];
    else return arr.sort((a,b) => a - b);
}