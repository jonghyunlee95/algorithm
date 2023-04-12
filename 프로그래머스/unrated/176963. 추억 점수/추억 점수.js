function solution(name, yearning, photo) {
    const map = new Map();
    const answer = [];
    let sum = 0;
    
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (let j = 0; j < photo.length; j++) {
        for (let k = 0; k < photo[j].length; k++) {
            if (map.get(photo[j][k])) sum += map.get(photo[j][k]);
        }
        
        answer.push(sum);
        sum = 0;
    }
    
    return answer;
}