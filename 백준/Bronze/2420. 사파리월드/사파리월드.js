
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

console.log(Math.abs(Number(input[0]) - Number(input[1])));