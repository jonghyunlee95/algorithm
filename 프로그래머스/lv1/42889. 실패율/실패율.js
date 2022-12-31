function solution(N, stages) {
    const answer = [];
    const arr = []; 
    let man = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let fail = stages.filter(a => a === i).length / man;
        man -= stages.filter(a => a === i).length;
        arr.push([i, fail]);
        arr.sort((a, b) => b[1] - a[1]);
    }
    
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i][0]);
    }
    
    
    return answer;
}