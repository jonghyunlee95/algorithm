const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = input
  .shift()
  .split(' ')
  .map((x) => +x);
const map = new Map();

for (let i = 0; i < T[0]; i++) {
  const group = input.splice(0, +input[1] + 2);
  girlGroup(group);
}

function girlGroup(arr) {
  const name = arr.shift();
  const num = arr.shift();
  map.set(name, arr);
}

for (let i = 0; i < input.length; i++) {
  if (i !== 0 && i % 2 !== 0) {
    if (input[i] === '0') {
      console.log(
        map
          .get(input[i - 1])
          .sort()
          .join('\n')
      );
    } else {
      for (const [key, value] of map) {
        if (value.includes(input[i - 1])) console.log(key);
      }
    }
  }
}
