const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input.map((x) => x.split(' ').map(Number));
const a = arr[0];
const b = arr[1];
let A = 0;
let B = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    A += a[i] * -1;
  } else {
    A += a[i];
  }
}

for (let i = 0; i < b.length; i++) {
  if (b[i] > 0) {
    B -= b[i] * -1;
  } else {
    B -= b[i];
  }
}
console.log(A + B);
