const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[T], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));

const PAPER_SIZE = 100;
const COLORED_PAPER_SIZE = 10;
const paper = Array.from(new Array(PAPER_SIZE), () => new Array(PAPER_SIZE).fill(0));
let sol = 0;

input.forEach(([col, row]) => {
  for (let r = row; r < row + COLORED_PAPER_SIZE; r++) {
    for (let c = col; c < col + COLORED_PAPER_SIZE; c++) {
      paper[r][c]++;
      if (paper[r][c] === 1) sol++;
    }
  }
});

console.log(sol);
