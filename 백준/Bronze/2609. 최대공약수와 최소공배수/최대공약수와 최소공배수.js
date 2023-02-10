const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((x) => +x);

let a = input[0];
let b = input[1];

while (a % b !== 0) {
  let num = a % b;

  if (num !== 0) {
    a = b;
    b = num;
  }
}
console.log(b);
console.log((input[0] * input[1]) / b);
