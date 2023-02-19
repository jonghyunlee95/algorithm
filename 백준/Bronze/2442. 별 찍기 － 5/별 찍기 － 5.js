const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();

for (let i = 1; i <= input; i++) {
  console.log(' '.repeat(input - i) + '*'.repeat(2 * i - 1));
}
