const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const haveNum = new Set(input[1].split(' ').map((x) => +x));

const checkNum = input[3].split(' ').map((x) => +x);

const arr = [];

for (let i = 0; i < checkNum.length; i++) {
  if (haveNum.has(checkNum[i])) arr.push(1);
  else arr.push(0);
}

console.log(arr.join(' '));
