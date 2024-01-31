const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

let sum = 0;
let cur = 0;

while (sum <= input) {
  cur++;
  sum += cur;
}

console.log(cur - 1);
