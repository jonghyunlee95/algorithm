const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
const answer = [];
const arr = [];

for (let i = input[0]; i <= input[1]; i++) {
  if (Math.sqrt(i) % 1 === 0) {
    arr.push(i);
  }
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

if (arr.length !== 0) answer.push(sum, Math.min(...arr));
else answer.push(-1);

console.log(answer.join('\n'));
