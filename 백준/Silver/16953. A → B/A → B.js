const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let flag = false;
let cnt = 1;

while (B >= A) {
  if (A === B) {
    flag = true;
    break;
  }

  if (B % 2 === 0) B = Math.floor(B / 2);
  else if (B % 10 === 1) B = Math.floor(B / 10);
  else break;

  cnt++;
}

if (flag) console.log(cnt);
else console.log(-1);
