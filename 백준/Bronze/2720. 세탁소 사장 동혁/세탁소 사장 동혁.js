const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
let answer = [];

for (let i = 0; i < input.length; i++) {
  let money = input[i];
  answer.push(parseInt(money / 25));
  money -= parseInt(money / 25) * 25;
  answer.push(parseInt(money / 10));
  money -= parseInt(money / 10) * 10;
  answer.push(parseInt(money / 5));
  money -= parseInt(money / 5) * 5;
  answer.push(parseInt(money / 1));
  money -= parseInt(money / 1) * 1;

  console.log(answer.join(' '));
  answer = [];
}
