function solution(ingredient) {
    let answer = 0;
    const arr = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i]);
        
        if (arr.length >= 4) {
            const str = arr.slice(-4).join('');
            
            if (str === '1231') {
                arr.pop();
                arr.pop();
                arr.pop();
                arr.pop();
                answer++;
            }
        }
    }
    
    return answer;
}