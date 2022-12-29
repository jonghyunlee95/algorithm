function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (first[i % first.length] === answers[i]) score[0]++;
        if (second[i % second.length] === answers[i]) score[1]++;
        if (third[i % third.length] === answers[i]) score[2]++;
    }
    
    const max = Math.max(...score);
    const answer = [];
    
    for (let j = 0; j < score.length; j++) {
        if (max === score[j]) answer.push(j + 1);
    }
    
    return answer;
}