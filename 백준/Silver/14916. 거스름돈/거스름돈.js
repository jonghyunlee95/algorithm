const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +require('fs').readFileSync(filePath).toString().trim();
let cnt = 0;
let bool = false;

while (input >= 0) {
  if (input === 0 || input % 5 === 0) {
    cnt += input / 5;
    bool = true;
    break;
  } else {
    input -= 2;
    cnt++;
  }
}

if (bool) console.log(cnt);
else console.log(-1);
