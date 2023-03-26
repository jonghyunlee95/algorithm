const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const set = new Set();
const first = input.shift();
let answer = 0;

for (let i = 0; i < T - 1; i++) {
  if (input[i] === 'ENTER') {
    answer += set.size;
    set.clear();
  } else {
    set.add(input[i]);
  }
}

console.log((answer += set.size));
