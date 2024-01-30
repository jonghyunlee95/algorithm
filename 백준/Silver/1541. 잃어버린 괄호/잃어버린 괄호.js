const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('-')
  .map((item) => item.split('+'));

for (let i = 0; i < input.length; i++) {
  if (input[i].length > 1) {
    input[i] = input[i].map(Number).reduce((a, b) => a + b);
  } else {
    input[i] = input[i].map(Number)[0];
  }
}

let cnt = input[0];

for (let i = 1; i < input.length; i++) {
  cnt -= input[i];
}

console.log(cnt);
