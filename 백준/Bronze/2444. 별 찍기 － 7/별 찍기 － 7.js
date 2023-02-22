const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const star = [];
for (let i = 1; i <= input; i++) {
  star.push(' '.repeat(input - i) + '*'.repeat(2 * i - 1));
}
const reverseStar = [];
for (let i = 0; i < star.length - 1; i++) {
  reverseStar.push(star[i]);
}
console.log(star.concat(reverseStar.reverse()).join('\n'));
