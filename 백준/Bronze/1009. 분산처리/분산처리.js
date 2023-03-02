const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = input.map((x) => {
  const [a, b] = x.split(' ');
  let num = 1;

  for (let i = 0; i < b; i++) {
    num = (num * a) % 10;
  }

  return num === 0 ? 10 : num;
});

console.log(answer.join('\n'));
