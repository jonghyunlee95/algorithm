const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let cost = [];
input.forEach(function (value) {
  cost.push(Number(value));
});

let cheapBurger = cost[0];
for (let i = 1; i < 3; i++) {
  if (cheapBurger > cost[i]) {
    cheapBurger = cost[i];
  }
}

let cheapDrink = cost[3];
if (cheapDrink > cost[4]) {
  cheapDrink = cost[4];
}

let setCost = cheapBurger + cheapDrink - 50;
console.log(setCost);
