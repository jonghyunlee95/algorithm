const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ').map(Number);
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let tired = T[0];
let answer = 0;

for (let i = 0; i < T[1]; i++) {
  if (tired >= 200) break;
  tired += arr[i];
  answer++;
}

console.log(answer);
