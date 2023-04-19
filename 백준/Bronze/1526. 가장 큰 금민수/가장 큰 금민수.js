const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const gold = [];

function valid(num) {
  while (num) {
    let digit = num % 10;

    if (digit !== 4 && digit !== 7) {
      return false;
    }

    num = Math.floor(num / 10);
  }

  return true;
}

for (let i = 4; i <= input; i++) {
  if (valid(i)) {
    gold.push(i);
  }
}

console.log(Math.max(...gold));
