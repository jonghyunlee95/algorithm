const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [T, tape] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let start = arr[0];
let cnt = 1;

for (let i = 1; i < T; i++) {
  if (arr[i] <= start - tape) {
    cnt++;
    start = arr[i];
  }
}

console.log(cnt);
