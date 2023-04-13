function solution(n, m, section) {
    let cnt = 0;
    let paint = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (paint < section[i]) {
            paint = section[i] + m - 1;
            cnt++;
        }
    }
    
    return cnt;
}