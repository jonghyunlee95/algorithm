function solution(progresses, speeds) {
    const answer = [];
    
    for (let i = 0; i < progresses.length; i++) {
        progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let idx = progresses[0];
    let cnt = 1;
    
    for (let j = 1; j <= progresses.length; j++) {
        if (idx >= progresses[j]) {
            cnt++;
        } else {
            answer.push(cnt);
            cnt =  1;
            idx = progresses[j];
        }
    }
    
    return answer;
}