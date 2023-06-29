// function solution(n) {    
//     for (let i = 1; i < n; i++) {
//         if (n % i === 1) {
//             return i;
//         }
//     }    
// }

function solution(n) {
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    return arr.find(x => n % x === 1);
}