const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
const end = Math.floor(input[0] / input[1]) + 1;
const answer = [];

for (let i = 1; i <= end; i++) {
  const num1 = Math.floor(input[0] / 100);
  const num2 = Math.floor((input[1] * i) / 100);

  if (num1 === num2) {
    answer.push((input[1] * i) % 100);
    break;
  }
}

if (answer.join('').length === 1) answer.unshift(0);
console.log(answer.join(''));
