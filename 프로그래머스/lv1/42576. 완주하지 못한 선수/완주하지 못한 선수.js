function solution(participant, completion) {
    const map = new Map();

    for (let i = 0; i < participant.length; i++) {
        const join = participant[i];
        const done = completion[i];

        map.set(join, (map.get(join) || 0) + 1);
        map.set(done, (map.get(done) || 0) - 1);
    }
    
    for (const [key, value] of map) {
        if (value > 0) return key;
    }
}