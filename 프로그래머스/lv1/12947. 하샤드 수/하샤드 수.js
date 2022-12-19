function solution(x) {
    let arr = x.toString().split('').map((x) => +x);
    let num = 0;
    
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    
    if (x % num === 0) return true;
    if (x % num !== 0) return false;
}