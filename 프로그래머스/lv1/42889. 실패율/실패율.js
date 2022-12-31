function solution(N, stages) {
    const answer = []; 
    let man = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let fail = stages.filter(a => a === i).length / man;
        man -= stages.filter(a => a === i).length;
        answer.push([i, fail]);
        answer.sort((a, b) => b[1] - a[1]);
    }
    
    return answer.map(x => x[0]);
}