const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));

const T = input.shift();
const basket = Array(T[0]).fill(0);

for (let i = 0; i < input.length; i++) {
  for (let j = input[i][0] - 1; j <= input[i][1] - 1; j++) {
    basket[j] = input[i][2];
  }
}

console.log(basket.join(' '));
