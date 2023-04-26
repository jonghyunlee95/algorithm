const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];

for (let i = 0; i < T; i++) {
  const people = +input.shift();
  let arr = input
    .splice(0, people)
    .map((x) => x.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);
  let cnt = 1;
  let temp = arr[0][1];

  for (let j = 1; j < people; j++) {
    if (arr[j][1] < temp) {
      temp = arr[j][1];
      cnt++;
    }
  }
  answer.push(cnt);
}

console.log(answer.join('\n'));
