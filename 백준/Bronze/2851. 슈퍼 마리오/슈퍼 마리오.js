const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
let arr = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];
  arr.push(sum);
}

const answer = arr.map((x) => Math.abs(100 - x));
const idx = answer.lastIndexOf(Math.min(...answer));

console.log(arr[idx]);
