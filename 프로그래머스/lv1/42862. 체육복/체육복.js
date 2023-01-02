function solution(n, lost, reserve) {
    let answer =  n - lost.length;
    const arr = [];
    
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter((x) => x !== lost[i]);
            answer += 1;
        } else {
            arr.push(lost[i]);
        }
    }
    
    lost = arr.sort((a, b) => a - b);
    
    for (let i = 0 ; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            answer += 1;
            reserve = reserve.filter ((x) => x !== lost[i] - 1);
        }
        else if (reserve.includes(lost[i] + 1)) {
            answer += 1;
            reserve = reserve.filter((x) => x !== lost[i] + 1);
        }
    }
    
    return answer;
}