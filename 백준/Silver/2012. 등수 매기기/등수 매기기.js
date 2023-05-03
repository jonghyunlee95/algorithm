const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const arr = input.sort((a, b) => b - a);
let sum = 0;

for (let i = T; i >= 1; i--) {
  sum += Math.abs(arr[arr.length - i] - i);
}

console.log(sum);
