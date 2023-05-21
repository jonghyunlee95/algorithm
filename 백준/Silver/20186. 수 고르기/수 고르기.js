const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ');
const N = +T[0];
const K = +T[1];
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < K; i++) {
  sum += arr[i];
}

console.log(sum - (K * (K - 1)) / 2);
