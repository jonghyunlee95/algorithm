function solution(genres, plays) {
    const map = new Map();
    
    genres = genres.map((gen, idx) => [gen, plays[idx], idx]);
    
    for (let i = 0; i < genres.length; i++) {
        const [genre, play, index] = genres[i];
        
        if (!map.has(genre)) map.set(genre, {sum: play, song: [[play, index]]});
        else {
            const data = map.get(genre);
            map.set(genre, {sum: data.sum + play, song: [...data.song, [play, index]]})                         
        }
    }
    
    
    return ([...map]
                .sort((a, b) => b[1].sum - a[1].sum)
                .flatMap(x => x[1].song.sort((a, b) => b[0] - a[0]).slice(0, 2))
                .map(x => x[1]))
}