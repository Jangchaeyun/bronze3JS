let input = require("fs").readFileSync("./input.txt").toString().trim();
let N = parseInt(input);
let answer = [];
for (let i = 1; i <= 500; i++) {
  if (Math.sqrt(N + i * i) % 1 === 0) {
    answer.push(i);
  }
}

console.log(answer.length);
