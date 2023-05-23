const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const card = arr[0];
let sum = 0;

for (let i = 1; i < arr.length; i++) {
  sum += card + arr[i];
}

console.log(sum);
