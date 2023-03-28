const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];
let cnt = 0;

for (let i = 0; i < T; i++) {
  const NM = input[i].split(' ');
  const N = +NM[0];
  const M = +NM[1];

  for (let j = N; j <= M; j++) {
    const arr = String(j).split('');
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === '0') cnt++;
    }
  }
  answer.push(cnt);
  cnt = 0;
}
console.log(answer.join('\n'));
