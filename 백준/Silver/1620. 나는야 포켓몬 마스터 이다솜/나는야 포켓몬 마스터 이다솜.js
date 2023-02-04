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

const pocketmon = input.splice(0, T[0]);
const find = input;
const library = new Map();
const reverse = new Map();

for (let i = 0; i < pocketmon.length; i++) {
  library.set(pocketmon[i], i + 1);
  reverse.set(i + 1, pocketmon[i]);
}

for (let i = 0; i < find.length; i++) {
  if (Number.isNaN(+find[i])) console.log(String(library.get(find[i])));
  else console.log(reverse.get(+find[i]));
}
