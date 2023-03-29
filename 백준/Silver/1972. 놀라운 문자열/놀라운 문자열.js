const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
let arr = [];
const answer = [];

for (let i = 0; i < input.length; i++) {
  confirm(input[i]);
}

function confirm(str) {
  const set = new Set();
  let cnt = 0;

  if (str.length === 1) arr.push(true);

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length - i - 1; j++) {
      cnt++;
      set.add(str[j] + str[j + i + 1]);
    }
    if (set.size === cnt) arr.push(true);
    else arr.push(false);
    set.clear();
    cnt = 0;
  }
  if (arr.includes(false)) answer.push(str + ' is NOT surprising.');
  else answer.push(str + ' is surprising.');
  arr = [];
}

console.log(answer.join('\n'));
