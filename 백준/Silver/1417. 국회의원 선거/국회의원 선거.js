const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const arr = input.splice(1);
let dasom = input[0];
let cnt = 0;
let max = Math.max(...arr);

while (dasom <= max) {
  dasom++;
  arr[arr.indexOf(max)] -= 1;
  cnt++;
  max = Math.max(...arr);
}

console.log(cnt);
