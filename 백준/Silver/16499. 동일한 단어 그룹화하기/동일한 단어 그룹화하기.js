const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const set = new Set();
input = input.map((x) => x.trim().split(''));

for (let i = 0; i < T; i++) {
  const str = input[i].sort().join('');
  set.add(str);
}

console.log(set.size);
