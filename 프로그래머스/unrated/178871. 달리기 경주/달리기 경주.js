function solution(players, callings) {
    const map = new Map();
    
    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);    
    }
    
    for (let j = 0; j < callings.length; j++) {
        const idx = map.get(callings[j]);
        const temp = players[idx - 1];
        
        players[idx - 1] = callings[j];
        players[idx] = temp; 
        
        map.set(callings[j], idx - 1);
        map.set(temp, idx);

    }                         
    
    return players;
}