const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const money = [500, 100, 50, 10, 5, 1];
const exchangeArr = [0, 0, 0, 0, 0, 0];
let exchange = 1000 - input;

for (let i = 0; i < exchangeArr.length; i++) {
  exchangeArr[i] = Math.floor(exchange / money[i]);
  exchange = exchange % money[i];
}

console.log(exchangeArr.reduce((a, b) => a + b));
