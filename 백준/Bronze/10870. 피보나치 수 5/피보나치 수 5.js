const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();

function solution(number) {
  if (number == 0) return 0;
  else if (number == 1) return 1;
  else return solution(number - 1) + solution(number - 2);
}

console.log(solution(input));
