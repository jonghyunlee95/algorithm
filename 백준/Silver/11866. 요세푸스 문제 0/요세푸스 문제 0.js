const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((x) => +x);
let arr = [];

for (let i = 1; i <= input[0]; i++) {
  arr.push(i);
}

const answer = [];
let idx = 1;

while (arr.length !== 0) {
  const num = arr.shift();

  if (idx % input[1] === 0) {
    answer.push(num);
  } else {
    arr.push(num);
  }
  idx++;
}

console.log(`<${answer.join(', ')}>`);
