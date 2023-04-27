const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0].split(' ').map(Number);
let cnt = 0;

for (i of arr) {
  if (i === cnt % 3) cnt++;
}

console.log(cnt);
