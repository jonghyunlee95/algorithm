const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(' '));
const objX = {};
const objY = {};
const answer = [];

for (let i = 0; i < input.length; i++) {
  objX[input[i][0]] = (objX[input[i][0]] || 0) + 1;
  objY[input[i][1]] = (objY[input[i][1]] || 0) + 1;
}
const X = Object.entries(objX);
const Y = Object.entries(objY);

for (let i = 0; i < X.length; i++) {
  if (X[i][1] === 1) answer.push(X[i][0]);
}

for (let i = 0; i < Y.length; i++) {
  if (Y[i][1] === 1) answer.push(Y[i][0]);
}

console.log(answer.join(' '));
