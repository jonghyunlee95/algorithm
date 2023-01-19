const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(x => Number(x));

const a = input[0];     
const b = input[1];    
const c = input[2];    

console.log(Math.ceil((c - b) / (a - b)));

