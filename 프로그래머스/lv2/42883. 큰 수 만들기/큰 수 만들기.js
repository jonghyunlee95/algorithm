function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const item = number[i];
        
        while (k > 0 && stack[stack.length - 1] < item) {
            k--;
            stack.pop();
        }
        stack.push(item);
    }
    
    stack.splice(stack.length - k, k);
    return stack.join('');
}