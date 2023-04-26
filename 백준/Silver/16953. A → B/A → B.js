const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const min = input[0];
let max = input[1];
let cnt = 0;

while (max >= min) {
  const arr = String(max).split('');

  if (arr[arr.length - 1] === '1') {
    arr.pop();
    max = Number(arr.join(''));
    cnt++;
  } else {
    max /= 2;
    cnt++;
  }
  if (max === min) break;
}

if (max !== min) console.log(-1);
else console.log(cnt + 1);
