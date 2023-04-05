const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const map = new Map();

for (let i = 0; i < T; i++) {
  const work = input.splice(0, 4).map((x) => x.split(' '));

  for (let j = 0; j < work.length; j++) {
    for (let k = 0; k < work[j].length; k++) {
      if (work[j][k] === '-') {
        map.set(work[j][k], 0);
      }
      if (work[j][k] !== '-') {
        if (j === 0 && !map.has(work[j][k])) {
          map.set(work[j][k], 4);
        } else if (j === 0 && map.has(work[j][k])) {
          map.set(work[j][k], map.get(work[j][k]) + 4);
        }
        if (j === 1 && !map.has(work[j][k])) {
          map.set(work[j][k], 6);
        } else if (j === 1 && map.has(work[j][k])) {
          map.set(work[j][k], map.get(work[j][k]) + 6);
        }
        if (j === 2 && !map.has(work[j][k])) {
          map.set(work[j][k], 4);
        } else if (j === 2 && map.has(work[j][k])) {
          map.set(work[j][k], map.get(work[j][k]) + 4);
        }
        if (j === 3 && !map.has(work[j][k])) {
          map.set(work[j][k], 10);
        } else if (j === 3 && map.has(work[j][k])) {
          map.set(work[j][k], map.get(work[j][k]) + 10);
        }
      }
    }
  }
}
if (map.size === 1 && map.has('-')) {
  console.log('Yes');
} else {
  map.delete('-');
  const time = [...map].sort((a, b) => b[1] - a[1]);

  if (time[0][1] - time[time.length - 1][1] <= 12) console.log('Yes');
  else if (time[0][1] - time[time.length - 1][1] > 12) console.log('No');
  else console.log('Yes');
}
