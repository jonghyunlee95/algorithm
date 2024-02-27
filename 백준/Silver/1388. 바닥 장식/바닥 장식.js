const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = n.split(' ').map(Number);
const room = arr.map((v) => v.split(''));
let answer = 0;

for (let i = 0; i < R; i++) {
  let flag = true;
  for (let j = 0; j < C; j++) {
    if (flag === true && room[i][j] === '-') {
      answer++;
      flag = false;
    } else if (room[i][j] === '|') {
      flag = true;
    }
  }
}

for (let i = 0; i < C; i++) {
  let flag = true;
  for (let j = 0; j < R; j++) {
    if (flag === true && room[j][i] === '|') {
      answer++;
      flag = false;
    } else if (room[j][i] === '-') {
      flag = true;
    }
  }
}
console.log(answer);