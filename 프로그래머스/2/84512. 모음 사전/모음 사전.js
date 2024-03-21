function solution(word) {
    const str = 'AEIOU'
    const answer = [];
    
    
    function dfs(alpa, cnt) {
        if (cnt <= 5) {
            answer.push(alpa);
            
            for (let i = 0; i < str.length; i++) {
            dfs(str[i] + alpa, cnt + 1);
            }
        }
    }
    
    dfs('', 0);
    
    return answer.sort().indexOf(word);
}