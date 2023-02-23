const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const star = [];
for (let i = 1; i <= input; i++) {
  star.push('*'.repeat(i));
}
const reverseStar = [];
for (let i = 0; i < star.length - 1; i++) {
  reverseStar.push(star[i]);
}
reverseStar.reverse();
console.log(star.concat(reverseStar).join('\n'));
