const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const long = [];
for (let i = 0; i < input / 4; i++) {
  long.push('long');
}
console.log(`${long.join(' ')} int`);
