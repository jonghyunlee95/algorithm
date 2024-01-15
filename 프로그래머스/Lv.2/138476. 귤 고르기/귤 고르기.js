function solution(k, tangerine) {
    const map = new Map();
    let answer = 0;
    
    for (let i = 0; i < tangerine.length; i++) {
        if (!map.get(tangerine[i])) map.set(tangerine[i], 1);
        else map.set(tangerine[i], map.get(tangerine[i]) + 1);
    }
    
    const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < sortedMap.length; i++) {
        answer++;
        
        if (k > sortedMap[i][1]) k -= sortedMap[i][1];
        else break;
    }
    
    return(answer)
}