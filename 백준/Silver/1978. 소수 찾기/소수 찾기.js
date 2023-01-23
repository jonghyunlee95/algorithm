const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const a = input[0];
const arr = input[1].split(' ').map((x) => Number(x));
let cnt = 0;

function prime(n) {
  if (n == 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

for (let i = 0; i < Number(a); i++) {
  if (prime(arr[i])) cnt++;
}

console.log(cnt);
