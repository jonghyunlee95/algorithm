const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const num = input[0];
const money = input[1].split(' ').map(Number);
let [y, m] = [0, 0];

money.forEach((el) => {
  y += (parseInt(el / 30) + 1) * 10;
  m += (parseInt(el / 60) + 1) * 15;
});

if (y === m) {
  console.log(['Y M', y].join(' '));
} else if (y < m) {
  console.log(['Y', y].join(' '));
} else {
  console.log(['M', m].join(' '));
}
