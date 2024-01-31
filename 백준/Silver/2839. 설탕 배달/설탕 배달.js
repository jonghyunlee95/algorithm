const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +require('fs').readFileSync(filePath).toString().trim();
let cnt = 0;
let flag = false;

while (input >= 0) {
  if (input === 0 || input % 5 === 0) {
    cnt += Math.floor(input / 5);
    console.log(cnt);
    flag = true;
    break;
  }

  input -= 3;
  cnt++;
}

if (!flag) console.log(-1);
