const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = Math.max(sum, arr[i] + i + 1);
}

console.log(sum + 1);
