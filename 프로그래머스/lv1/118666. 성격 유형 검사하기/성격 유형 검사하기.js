function solution(survey, choices) {
    let answer = '';
    const arr = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    const num = [0, 0, 0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < survey.length; i++) {
        const el = survey[i].split('');
        
        if (choices[i] < 4) {
            if (choices[i] === 3) num[arr.indexOf(el[0])] += 1;                             
            if (choices[i] === 2) num[arr.indexOf(el[0])] += 2;
            if (choices[i] === 1) num[arr.indexOf(el[0])] += 3;
        } else if (choices[i] > 4) {
            if (choices[i] === 5) num[arr.indexOf(el[1])] += 1;
            if (choices[i] === 6) num[arr.indexOf(el[1])] += 2;
            if (choices[i] === 7) num[arr.indexOf(el[1])] += 3;
        } 
    }
    
    for (let i = 0; i < 4; i++) {
        const name = arr.splice(0, 2);
        const score = num.splice(0, 2);

        if (score[0] > score[1]) answer += name[0];
        if (score[0] < score[1]) answer += name[1];
        if (score[0] === score[1]) answer += name.sort()[0];
    }
    return answer;
}