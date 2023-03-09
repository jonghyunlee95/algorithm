const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const answer = [];
const arr = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 !== 0) arr.push(input[i]);
}

if (arr.length === 0) {
  answer.push(-1);
} else {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  answer.push(sum);
  arr.sort((a, b) => a - b);
  answer.push(arr[0]);
}
console.log(answer.join('\n'));
