const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0]
  .split(' ')
  .map((x) => +x)
  .sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
  arr[i + 1] = arr[i] + arr[i + 1];
}

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
