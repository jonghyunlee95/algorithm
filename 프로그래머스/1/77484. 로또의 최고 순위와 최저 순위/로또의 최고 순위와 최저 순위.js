function solution(lottos, win_nums) {
    const answer = [];
    const fakeNum = lottos.filter(num => num === 0).length;
    const lotto = lottos.filter(num => num !== 0);
    let correct = 0;
    
    for (const num of lotto) {
        if (win_nums.includes(num)) correct++;
    }
        
    if (fakeNum + correct === 6) answer.push(1);
    if (fakeNum + correct === 5) answer.push(2);
    if (fakeNum + correct === 4) answer.push(3);
    if (fakeNum + correct === 3) answer.push(4);
    if (fakeNum + correct === 2) answer.push(5);
    if (fakeNum + correct <= 1) answer.push(6);
    if (correct === 6) answer.push(1);
    if (correct === 5) answer.push(2);
    if (correct === 4) answer.push(3);
    if (correct === 3) answer.push(4);
    if (correct === 2) answer.push(5);
    if (correct <= 1) answer.push(6);
    
    return answer;
}