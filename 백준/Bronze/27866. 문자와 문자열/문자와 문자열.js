const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const str = input[0];
const idx = input[1] - 1;

console.log(str[idx]);
