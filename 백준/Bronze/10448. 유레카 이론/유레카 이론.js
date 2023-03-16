const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
const T = input.shift();
const arr = [];
const answer = [];

for (let i = 1; i <= 45; i++) {
  for (let j = 1; j <= 45; j++) {
    for (let k = 1; k <= 45; k++) {
      const num1 = (i * (i + 1)) / 2;
      const num2 = (j * (j + 1)) / 2;
      const num3 = (k * (k + 1)) / 2;
      if (num1 + num2 + num3 <= 1000) {
        if (!arr.includes(num1 + num2 + num3)) arr.push(num1 + num2 + num3);
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  if (arr.includes(input[i])) answer.push(1);
  else answer.push(0);
}

console.log(answer.join('\n'));
