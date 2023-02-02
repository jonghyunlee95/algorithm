const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const rowCol = input.shift().trim().split(' ');
const row = +rowCol[0];
const col = +rowCol[1];
const arr = [];

const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];

const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

function paintW(x, y) {
  let cnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[i + x][j + y] !== white[i][j]) cnt++;
    }
  }

  return cnt;
}

function paintB(x, y) {
  let cnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[i + x][j + y] !== black[i][j]) cnt++;
    }
  }

  return cnt;
}

for (let i = 0; i < row - 7; i++) {
  for (let j = 0; j < col - 7; j++) {
    arr.push(paintW(i, j));
    arr.push(paintB(i, j));
  }
}

console.log(Math.min(...arr));
