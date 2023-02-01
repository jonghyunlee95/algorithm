const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const maxNum = +T.split(' ')[1];
const score = input.split(' ').map((x) => +x);
const answer = [];

for (let i = 0; i < score.length - 2; i++) {
  for (let j = i + 1; j < score.length - 1; j++) {
    for (let k = j + 1; k < score.length; k++) {
      const sum = score[i] + score[j] + score[k];
      if (sum <= maxNum) {
        answer.push(score[i] + score[j] + score[k]);
      }
    }
  }
}

console.log(Math.max(...answer));
