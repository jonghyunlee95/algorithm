const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((x) => +x);
const map = new Map();

for (const item of input) {
  if (!map.has(item)) map.set(item, 1);
  else map.set(item, map.get(item) + 1);
}

const arr = [...map].sort((a, b) => b[1] - a[1]);
const answer = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i][1]; j++) {
    answer.push(arr[i][0]);
  }
}

console.log(answer.join(' '));
