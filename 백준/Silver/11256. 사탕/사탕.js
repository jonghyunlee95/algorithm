const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];

for (let i = 0; i < T; i++) {
  const t = input.shift().split(' ').map(Number);
  const J = t[0];
  const N = t[1];
  let box = [];
  let sum = 0;
  let cnt = 0;

  for (let j = 0; j < N; j++) {
    const candy = input.shift().split(' ').map(Number);
    box.push(candy[0] * candy[1]);
  }
  box = box.sort((a, b) => b - a);

  for (let k = 0; k < box.length; k++) {
    sum += box[k];
    cnt++;
    if (sum >= J) {
      answer.push(cnt);
      break;
    }
  }
  box = [];
  sum = 0;
  cnt = 0;
}

console.log(answer.join('\n'));
