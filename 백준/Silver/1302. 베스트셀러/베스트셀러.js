const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const map = new Map();

for (let i = 0; i < T; i++) {
  if (!map.has(input[i])) map.set(input[i], 1);
  else map.set(input[i], map.get(input[i]) + 1);
}

const answer = [...map].sort().sort((a, b) => b[1] - a[1]);

console.log(answer[0][0]);
