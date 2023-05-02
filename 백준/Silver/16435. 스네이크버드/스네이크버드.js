const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let length = +T.split(' ')[1];
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= length) length++;
  else break;
}

console.log(length);
