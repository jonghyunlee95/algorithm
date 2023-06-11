function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    
    for (const[node, dest] of edge) {
        graph[node].push(dest);
        graph[dest].push(node);
    }
    
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;
    
    const queue = [1];
    while (queue.length > 0) {
        const node = queue.shift(); 
        for (const dest of graph[node]) {
            if (distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[node] + 1;
            }
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}