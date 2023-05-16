const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(' ').map(Number));
const n = input[0][0];
const m = input[0][1];
let arr = [];
let idx = 0;
let sum = 0;
let answer = 0;

for (let i = 1; i < input.length; i++) {
  if (i % 2 !== 0) {
    if (input[i][0] >= input[i][1]) {
      idx = input[i][1] - 1;
    } else {
      arr.push(1);
    }
  } else {
    if (input[i - 1][0] < input[i - 1][1]) {
      continue;
    } else {
      input[i] = input[i].sort((a, b) => b - a);
      arr.push(input[i][idx]);
    }
  }
}

arr = arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  if (sum <= m) {
    answer++;
  }
}

console.log(answer);
