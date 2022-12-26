function solution(sizes) {
    let answer = 0;
    let width = [];
    let height = [];
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            sizes[i].reverse();
        }
        
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    }
    
    answer = Math.max(...width) * Math.max(...height);
    
    return answer;
}