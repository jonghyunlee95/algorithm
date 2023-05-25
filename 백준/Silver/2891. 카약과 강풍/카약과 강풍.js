const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);
const R = input[2].split(' ').map(Number);
let i = 0;

while (i < N[2]) {
  if (S.includes(R[i])) {
    S.splice(S.indexOf(R[i]), 1);
    R.splice(i, 1);
  } else if (S.includes(R[i] - 1)) {
    S.splice(S.indexOf(R[i] - 1), 1);
    R.splice(i, 1);
  } else if (S.includes(R[i] + 1)) {
    S.splice(S.indexOf(R[i] + 1), 1);
    R.splice(i, 1);
  } else i++;
}

console.log(S.length);
