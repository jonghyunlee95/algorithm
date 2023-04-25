const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0].split(' ').map(Number);
const uniqueArr = [...new Set([...arr].sort((a, b) => a - b))];
const map = new Map();
const answer = [];

for (let i = 0; i < uniqueArr.length; i++) {
  map.set(uniqueArr[i], i);
}

for (let i = 0; i < arr.length; i++) {
  answer.push(map.get(arr[i]));
}

console.log(answer.join(' '));
