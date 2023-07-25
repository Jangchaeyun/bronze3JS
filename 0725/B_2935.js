const fs = require("fs");

const [num1, op, num2] = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const a = num1.length - 1;
const b = num2.length - 1;
const bigger = Math.max(a, b);
const smaller = Math.min(a, b);

const result =
  op == "*"
    ? "1" + "0".repeat(a + b)
    : a == b
    ? "2" + "0".repeat(a)
    : "1" + "0".repeat(bigger - smaller - 1) + "1" + "0".repeat(smaller);

console.log(result);
