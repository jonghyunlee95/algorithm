function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.at(-1) === s[i]) stack.pop();
        else stack.push(s[i]);
    }

    if (!stack.length) return 1;
    else return 0;
}