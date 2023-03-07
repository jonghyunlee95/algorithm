function solution(wallpaper) {
    const answer = [];
    wallpaper = wallpaper.map(x => x.split(''));
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            answer.push(i);
            break;
        }
    }
    
    const arr1 = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].indexOf('#') !== -1) arr1.push(wallpaper[i].indexOf('#'));
    }
    
    answer.push(Math.min(...arr1));
    
    for (let i = wallpaper.length - 1; i >= 0; i--) {
        if (wallpaper[i].includes('#')) {
            answer.push(i + 1);
            break;
        }
    }
    
    const arr2 = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].lastIndexOf('#') !== -1) arr2.push(wallpaper[i].lastIndexOf('#'));
    }
    
    answer.push(Math.max(...arr2) + 1);
    
    return answer;
}