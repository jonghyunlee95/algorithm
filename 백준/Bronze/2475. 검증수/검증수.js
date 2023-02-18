const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((x) => +x);

let num = 0;

for (let i = 0; i < input.length; i++) {
  num += Math.pow(input[i], 2);
}

console.log(num % 10);
