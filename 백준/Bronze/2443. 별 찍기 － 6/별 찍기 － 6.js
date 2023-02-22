const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const star = [];
for (let i = input; i >= 1; i--) {
  star.push(' '.repeat(input - i) + '*'.repeat(2 * i - 1));
}
console.log(star.join('\n'));
