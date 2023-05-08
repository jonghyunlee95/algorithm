const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const T = input.shift();
const arr = input.sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] - i > 0) sum += arr[i] - i;
}

console.log(sum);
