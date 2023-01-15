function solution(k, tangerine) {
    let answer = 0;
    let obj = {};
    
    for (let i = 0; i < tangerine.length; i++) {
        obj[tangerine[i]] = (obj[tangerine[i]] || 0) + 1;
    }
   
    const arr1 = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const arr2 = [];
    let sum = 0;
    
    for (let j = 0; j < arr1.length; j++) { 
        sum += arr1[j][1];
        arr2.push(arr1[j]);
        
        if (sum >= k) {
            answer = arr2.length;
            break;
        }
    }
    
    return answer;
}