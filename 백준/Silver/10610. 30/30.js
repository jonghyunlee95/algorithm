const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map((x) => +x);

const sum = input.reduce((a, b) => a + b);

if (sum % 3 !== 0) {
  console.log(-1);
} else {
  if (!input.includes(0)) {
    console.log(-1);
  } else {
    input.sort((a, b) => b - a);
    console.log(input.join(''));
  }
}
