function solution(s) {
    let x = 0;
    let x_count = 0;
    let result = [];
    
    for(i = 0; i < s.length; i++){
        if(s[i] === s[x]) x_count++;
        else x_count--;  
        if(x_count === 0) {
            result.push(s.substring(x, i + 1))
            x = i + 1;
        }
    }
    return result.join('').length === s.length ? result.length : result.length + 1;
}