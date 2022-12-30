function solution(a, b, n) {
    let answer = 0;
    let coke = n;
    
    while (coke >= a) {
        let empty = Math.floor(coke / a);
        coke = coke - (empty * a) + (empty * b);
        answer += empty * b;
    }
    
    return answer;
}