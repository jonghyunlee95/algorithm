const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

const average = sum / input.length;

input.sort((a, b) => a - b);

console.log(average);
console.log(input[Math.floor(input.length / 2)]);
