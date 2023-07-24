const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .filter((el) => el % 2 === 1);

const solution = (odd) => {
  if (odd.length == 0) return -1;
  const min = odd.reduce((prev, cur) => (prev > cur ? cur : prev));
  const sum = odd.reduce((a, b) => a + b, 0);
  return sum + "\n" + min;
};

console.log(solution(input));
