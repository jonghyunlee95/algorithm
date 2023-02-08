const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
let maxHeight = 0;
let maxWidht = 0;
let maxHeightIdx = -1;
let maxWidhtIdx = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == 1 || arr[i][0] == 2) {
    if (maxHeight < arr[i][1]) {
      maxHeight = arr[i][1];
      maxHeightIdx = i;
    }
  } else {
    if (maxWidht < arr[i][1]) {
      maxWidht = arr[i][1];
      maxWidhtIdx = i;
    }
  }
}

const squareMax = maxWidht * maxHeight;
const squareMin = arr[(maxWidhtIdx + 3) % 6][1] * arr[(maxHeightIdx + 3) % 6][1];

console.log((squareMax - squareMin) * T);
