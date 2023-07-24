let [a] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let b = "";
let x = "";
for (let i = 1; i <= a; i++) {
  x += " ".repeat(a - i) + "*".repeat(i) + "\n";
}

for (let j = a - 1; j > 0; j--) {
  b += " ".repeat(a - j) + "*".repeat(j) + "\n";
}

console.log(x + b);
