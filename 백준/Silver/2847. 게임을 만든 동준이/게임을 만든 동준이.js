const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const T = input.shift();
const arr = input.reverse();
let answer = 0;

for (let i = 0; i < T; i++) {
  if (arr[i] <= arr[i + 1]) {
    answer += arr[i + 1] - arr[i] + 1;
    arr[i + 1] = arr[i] - 1;
  }
}

console.log(answer);
