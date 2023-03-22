const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const map = new Map();
input = input.map((x) => x.trim().split('.'));

for (const item of input) {
  if (!map.has(item[1])) map.set(item[1], 1);
  else map.set(item[1], map.get(item[1]) + 1);
}

const answer = [...map].sort();
console.log(answer.map((x) => x.join(' ')).join('\n'));
