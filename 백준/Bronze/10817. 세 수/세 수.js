const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(x => +x).sort((a, b) => b - a);
console.log(input[1]);
