const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const arr = input.split(' ').map(Number);
const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
const map = new Map();
let answer = '';

for (let i = 0; i < arr.length; i++) {
  map.set(sortedArr[i], i);
}

for (let i = 0; i < arr.length; i++) {
  answer += map.get(arr[i]) + ' ';
}

console.log(answer);
