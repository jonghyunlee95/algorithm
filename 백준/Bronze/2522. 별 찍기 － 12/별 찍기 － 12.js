const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const star = [];

for (let i = 1; i <= input; i++) {
  star.push(' '.repeat(input - i) + '*'.repeat(i));
}

const star1 = [];

for (let i = input - 2; i >= 0; i--) {
  star1.push(star[i]);
}

console.log(star.concat(star1).join('\n'));
