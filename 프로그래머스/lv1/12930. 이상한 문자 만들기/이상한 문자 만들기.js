function solution(s) {
    let answer = s.split(' ');
    let word = '';
    
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[i].length; j++) {
            let str = answer[i][j];
            if (j % 2 === 0) word += str.toUpperCase();
            if (j % 2 !== 0) word += str.toLowerCase();
        }
        if (i < answer.length - 1) word += ' ';
    }
    return word;
}