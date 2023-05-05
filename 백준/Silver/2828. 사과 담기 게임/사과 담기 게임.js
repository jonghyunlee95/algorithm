const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const basket = T.split(' ').map(Number)[1];
const arr = input.map(Number);

let move = 0;
let left = 0;
let right = 0 + (basket - 1);

for (let i = 1; i < arr.length; i++) {
  let tmp = arr[i] - 1;

  if (tmp > right) {
    move += tmp - right;
    right = tmp;
    left = tmp - (basket - 1);
  } else if (tmp < left) {
    move += left - tmp;
    left = tmp;
    right = tmp + (basket - 1);
  }
}

console.log(move);
