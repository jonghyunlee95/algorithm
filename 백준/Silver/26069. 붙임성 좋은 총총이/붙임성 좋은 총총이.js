const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
input = input.map((x) => x.split(' '));
const set = new Set();
set.add('ChongChong');

for (let i = 0; i < T; i++) {
  if (set.has(input[i][0])) set.add(input[i][1]);
  else if (set.has(input[i][1])) set.add(input[i][0]);
}

console.log(set.size);
