function solution(clothes) {
    let answer = 1;
    const obj = {};
    
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }
    
    const arr = Object.values(obj);
    
    for (let j = 0; j < arr.length; j++) {
        answer *= arr[j];
    }
    
    return answer - 1;
}