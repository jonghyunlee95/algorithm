function solution(n, arr1, arr2) {
    const answer = [];
    const arr = [];
    let word = '';
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2);
        arr2[i] = arr2[i].toString(2);
        
        if(arr1[i].length !== 0) 
        
        answer.push(Number(arr1[i]) + Number(arr2[i]));
        
        let str = String(answer[i]);
        if (str.length !== n) word += ' '.repeat(n - str.length);
        
        for (let j = 0; j < n; j++) {
            if (str[j] > 0) word += '#';
            if (str[j] == 0) word += ' ';
            
        }
        
        arr.push(word);
        word = '';
    }
    return arr;
}