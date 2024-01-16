function solution(s) {
    let answer = 0;
    
    const confirm = (str) => {
        const arr = [];
        
        for (let i = 0; i < str.length; i++) {
            if (arr[arr.length - 1] === '[' && str[i] === ']') arr.pop();
            else if (arr[arr.length - 1] === '(' && str[i] === ')') arr.pop();
            else if (arr[arr.length - 1] === '{' && str[i] === '}') arr.pop();
            else arr.push(str[i])
        }
        
        if (arr.length) return false;
        else return true;
    }
    
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        
        if (confirm(rotated)) answer++;
    }
    
    return answer;
}