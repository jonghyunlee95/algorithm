const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const F = input[1];
let i = 0;

while (i <= 99) {
  let num = '';

  if (i < 10) {
    num = '0' + i;
  } else {
    num = num + i;
  }

  if ((N.slice(0, -2) + num) % F === 0) {
    console.log(num);
    break;
  } else {
    i++;
  }
}
