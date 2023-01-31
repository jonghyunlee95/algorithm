const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();
let answer = 1;

for (let i = 1; i <= input; i++) {
  answer *= i;
}

console.log(answer);
