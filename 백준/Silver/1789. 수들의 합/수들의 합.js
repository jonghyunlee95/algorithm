const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
let bool = true;
let i = 1;
let sum = 0;

while (bool) {
  sum += i;

  if (sum > input) {
    bool = false;
    i--;
    console.log(i);
  } else {
    i++;
  }
}
