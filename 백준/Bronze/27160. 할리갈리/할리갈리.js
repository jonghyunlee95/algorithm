const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const map = new Map();
input = input.map((x) => x.split(' '));

for (let i = 0; i < T; i++) {
  if (!map.has(input[i][0])) map.set(input[i][0], Number(input[i][1]));
  else map.set(input[i][0], map.get(input[i][0]) + Number(input[i][1]));
}

if ([...map.values()].includes(5)) console.log('YES');
else console.log('NO');
