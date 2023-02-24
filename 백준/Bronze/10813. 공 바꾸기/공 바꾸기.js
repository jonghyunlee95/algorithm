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

for (let i = 0; i < T[1]; i++) {
  const temp1 = basket[input[i][0] - 1];
  const temp2 = basket[input[i][1] - 1];
  basket[input[i][0] - 1] = temp2;
  basket[input[i][1] - 1] = temp1;
}

console.log(basket.join(' '));
