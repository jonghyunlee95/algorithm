const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(' '));
const obj = {};
const grade1 = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];
const grade2 = [4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0];
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < grade1.length; i++) {
  obj[grade1[i]] = grade2[i];
}

for (let i = 0; i < input.length; i++) {
  if (input[i][2] !== 'P') {
    sum2 += +input[i][1];
    sum1 += input[i][1] * obj[input[i][2]];
  }
}

console.log(sum1 / sum2);
