const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ').map(Number);
const score = input.shift().split(' ').map(Number);

const winScore = score[0];
const loseScore = score[1];
const levelUpScore = score[2];
const gameNum = T[0];
const hacking = input.splice(0, T[1]).map((x) => x.trim().split(' '));
const map = new Map();
input = input.map((x) => x.trim());
let tierNumber = 0;

for (let i = 0; i < hacking.length; i++) {
  map.set(hacking[i][0], hacking[i][1]);
}

for (let i = 0; i < gameNum; i++) {
  if (map.has(input[i]) && map.get(input[i]) === 'W') tierNumber += winScore;
  if (!map.has(input[i]) || (map.has(input[i]) && map.get(input[i]) === 'L')) tierNumber -= loseScore;
  if (tierNumber < 0) tierNumber = 0;
  if (tierNumber >= levelUpScore) {
    console.log('I AM NOT IRONMAN!!');
    break;
  }
}

if (tierNumber < levelUpScore) console.log('I AM IRONMAN!!');
