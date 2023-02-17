const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);

const arr = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== 0) arr.push(input[i]);
  else arr.pop();
}

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  answer += arr[i];
}

console.log(answer);
