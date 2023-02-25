const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const str = [];

for (let i = 0; i < T; i++) {
  str.push(input[i][0] + input[i][input[i].length - 1]);
}

console.log(str.join('\n'));
