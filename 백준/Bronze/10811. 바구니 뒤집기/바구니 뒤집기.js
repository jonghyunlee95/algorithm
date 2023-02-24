const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
const T = input.shift();
const basket = [];

for (let i = 1; i <= T[0]; i++) {
  basket.push(i);
}

for (let i = 0; i < input.length; i++) {
  const arr = [];
  for (let j = input[i][0] - 1; j <= input[i][1] - 1; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(input[i][0] - 1, input[i][1] - input[i][0] + 1, ...arr);
}

console.log(basket.join(' '));
