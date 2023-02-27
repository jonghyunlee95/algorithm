const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(''));
const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].length);
}

const maxNum = Math.max(...arr);
let str = '';

for (let i = 0; i < maxNum; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) str += input[j][i];
  }
}

console.log(str);
