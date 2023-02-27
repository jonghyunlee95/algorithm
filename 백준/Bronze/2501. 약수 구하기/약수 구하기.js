const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((x) => +x);
const arr = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) arr.push(i);
}

if (arr.length >= input[1]) console.log(arr[input[1] - 1]);
else console.log(0);
