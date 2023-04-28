const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((x) => x.split(''));
const answer = [];
let sum = [];

for (let i = 0; i < input.length; i++) {
  const arr = [...input[i]];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === '6') arr[j] = '5';
  }
  sum.push(Number(arr.join('')));
}

answer.push(sum.reduce((a, b) => a + b));
sum = [];

for (let i = 0; i < input.length; i++) {
  const arr = [...input[i]];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === '5') arr[j] = '6';
  }
  sum.push(Number(arr.join('')));
}

answer.push(sum.reduce((a, b) => a + b));

console.log(answer.join(' '));
