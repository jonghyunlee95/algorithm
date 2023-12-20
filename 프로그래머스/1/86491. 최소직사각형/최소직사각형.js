function solution(sizes) {
let maxWidth = 0;
let maxHeight = 0;
    
sizes.map((item) => {
    item.sort((a, b) => b - a);
    if (maxWidth < item[0]) maxWidth = item[0];
    if (maxHeight < item[1]) maxHeight = item[1];
})
    
return maxWidth * maxHeight;
}