const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const T = input.shift();
const answer = [];
const fibo = [0, 1];
let num = 1;

function fibonacci(num) {
  const arr = [];
  for (let i = 0; i < fibo.length; i++) {
    if (num >= fibo[i]) {
      if (num !== 0) {
        num -= fibo[i];
        arr.push(fibo[i]);
      } else break;
    }
  }
  return arr.reverse().join(' ');
}

while (num <= 1000000000) {
  fibo.push(fibo[fibo.length - 2] + num);
  num = fibo[fibo.length - 1];
}
fibo.sort((a, b) => b - a);

for (let i = 0; i < input.length; i++) {
  answer.push(fibonacci(input[i]));
}

console.log(answer.join('\n'));
