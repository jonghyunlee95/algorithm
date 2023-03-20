const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();

for (let i = 0; i < T; i++) {
  console.log(confirm(input).join('\n'));
}

function confirm(arr) {
  const T1 = +arr.shift();
  const book1 = arr.shift().split(' ');
  const T2 = +arr.shift();
  const book2 = arr.shift().split(' ');
  const set = new Set();
  const answer = [];

  for (let i = 0; i < T1; i++) {
    set.add(book1[i]);
  }

  for (let i = 0; i < T2; i++) {
    if (set.has(book2[i])) answer.push(1);
    else answer.push(0);
  }

  return answer;
}
