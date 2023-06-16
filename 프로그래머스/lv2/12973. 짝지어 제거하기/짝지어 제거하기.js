function solution(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }
    
    // if (!stack.length) return 1;
    // else return 0;
    return !stack.length ? 1 : 0 
}