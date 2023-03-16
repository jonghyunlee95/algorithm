function solution(clothes) {
    const map = new Map();
    
    clothes.forEach(item => {
        if (!map.has(item[1])) map.set(item[1], [item[0]]);
        else map.get(item[1]).push(item[0]);
    })
    
    let answer = 1;
    
    for (const value of map.values()) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
}