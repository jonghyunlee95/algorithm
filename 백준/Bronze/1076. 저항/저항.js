
const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim('')
  .split('\n');

const colors = [
  { color: 'black', value: 0, multiple: 1 },
  { color: 'brown', value: 1, multiple: 10 },
  { color: 'red', value: 2, multiple: 100 },
  { color: 'orange', value: 3, multiple: 1000 },
  { color: 'yellow', value: 4, multiple: 10000 },
  { color: 'green', value: 5, multiple: 100000 },
  { color: 'blue', value: 6, multiple: 1000000 },
  { color: 'violet', value: 7, multiple: 10000000 },
  { color: 'grey', value: 8, multiple: 100000000 },
  { color: 'white', value: 9, multiple: 1000000000 },
];

let fc = 0;
let sc = 0;
let tc = 0;

for (let i = 0; i < colors.length; i++) {
  if (colors[i].color === input[0]) {
    fc = colors[i].value;
  }

  if (colors[i].color === input[1]) {
    sc = colors[i].value;
  }

  if (colors[i].color === input[2]) {
    tc = colors[i].multiple;
  }
}

console.log(+(fc + sc.toString()) * tc);