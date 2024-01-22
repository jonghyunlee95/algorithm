const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = [];

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < i; j++) {
    arr.push(i);
  }
}

console.log(arr.slice(a - 1, b).reduce((a, b) => a + b));
