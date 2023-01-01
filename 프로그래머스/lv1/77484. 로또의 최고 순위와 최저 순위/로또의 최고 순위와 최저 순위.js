function solution(lottos, win_nums) {
    let answer = [];
    let max = 0;
    let min = 0;
    
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) max++, min++;
        if (lottos[i] === 0) max++;
    }
    
    while(answer.length !== 2) {
        if (max === 6 || min === 6) answer.push(1);
        if (max === 5 || min === 5) answer.push(2);
        if (max === 4 || min === 4) answer.push(3);
        if (max === 3 || min === 3) answer.push(4);
        if (max === 2 || min === 2) answer.push(5);
        if (max < 2 || min < 2) answer.push(6);
    }
    
    return answer;
}