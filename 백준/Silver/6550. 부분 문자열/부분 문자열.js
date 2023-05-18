const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.map((x) => x.split(' '));
const answer = [];
let idx1 = 0;
let idx2 = 0;

for (let i = 0; i < arr.length; i++) {
  let str = 'No';

  while (idx2 < arr[i][1].length) {
    if (arr[i][0][idx1] === arr[i][1][idx2]) {
      idx1++;
      idx2++;
    } else {
      idx2++;
    }

    if (idx1 === arr[i][0].length) {
      str = 'Yes';
      break;
    }
  }
  idx1 = 0;
  idx2 = 0;
  answer.push(str);
}

console.log(answer.join('\n'));
