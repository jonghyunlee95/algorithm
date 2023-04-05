const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const num = ['{}', '{{}}', '{{},{{}}}'];

for (let i = 3; i <= 15; i++) {
  num[i] = `{${num.reduce((a, b) => `${a},${b}`)}}`;
}

for (let i = 0; i < T; i++) {
  const num1 = input.shift();
  const num2 = input.shift();
  const sum = num.indexOf(num1) + num.indexOf(num2);
  console.log(num[sum]);
}
