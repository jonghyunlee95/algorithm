function solution(brown, yellow) {
    const answer = [];
    const sum = brown + yellow;
    
    for (let i = 3; i < sum; i++) {
         let width = sum / i;
         let height = i;
        
         if (width < height) continue;
        
         if ((width - 2) * (height - 2) === yellow) {
             answer[0] = width;
             answer[1] = height;
         }
    }
    
    return answer;
}