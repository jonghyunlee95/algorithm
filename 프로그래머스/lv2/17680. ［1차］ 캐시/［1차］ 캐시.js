function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    cities = cities.map (x => x.toLowerCase());
        
    for (let i = 0; i < cities.length; i++) {
        if (!cache.includes(cities[i])) {
            cache.push(cities[i]);
            answer += 5;
        } else {
            cache.splice(cache.indexOf(cities[i]), 1);
            cache.push(cities[i]);
            answer++;
        }
        
        if (cache.length > cacheSize) {
            cache.shift();
        }
    }
    
    return answer;
}