const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const obj = {};
const answer = [];

input = input.join().split(' ');
const newInput = new Set(input);
const uniqueArr = [...newInput].sort((a, b) => a - b);

for (let i = 0; i < uniqueArr.length; i++) {
  obj[uniqueArr[i]] = i;
}

for (let i = 0; i < T; i++) {
  answer.push(obj[input[i]]);
}

console.log(answer.join(' '));
