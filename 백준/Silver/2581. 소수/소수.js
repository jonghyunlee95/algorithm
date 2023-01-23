const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = Number(input[0]);
const b = Number(input[1]);
const arr = [];

function prime(n) {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

for (let i = a; i <= b; i++) {
  if (prime(i)) arr.push(i);
}

if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((acc, el) => acc + el, 0));
  console.log(Math.min(...arr));
}

