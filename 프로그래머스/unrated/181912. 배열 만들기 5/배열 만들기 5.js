function solution(intStrs, k, s, l) {
    const answer = [];
    
    intStrs.map((item) => {
        const num = +item.split('').splice(s, l).join('');
        if (num > k) answer.push(num);
    });
    
    return answer;
}