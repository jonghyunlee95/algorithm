function solution(n, words) {
    let answer = [];
    let arr = [words[0]];

    for (let i = 1; i < words.length; i++) {
        let str = words[i];
       
        if (arr.includes(str) || arr[arr.length - 1].at(-1) !== str[0]) {
            answer[0] = (i % n) + 1;
            answer[1] = Math.floor((i / n) + 1);
            break;
        } else {
            arr.push(str)
        }
    }
    
    if (answer.length === 0) {
        answer[0] = 0;
        answer[1] = 0;
    }
        

    return answer;
}