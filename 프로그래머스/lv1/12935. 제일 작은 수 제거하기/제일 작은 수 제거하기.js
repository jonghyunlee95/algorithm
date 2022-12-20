function solution(arr) {
    let min = Math.min(...arr);
    let idx = arr.indexOf(min); 
    arr.splice(idx,1);
    
    if(arr.length === 0) arr.push(-1);
    
    return arr;
}