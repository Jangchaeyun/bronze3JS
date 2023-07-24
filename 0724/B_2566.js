const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let N = 0;
let M = 0;
const arr = [];
input.forEach((i) => {
  i = i.split(" ").map((a) => Number(a));
  M = i.length;
  arr.push(...i);
});

const max = Math.max(...arr);
const index = arr.indexOf(max);
console.log(max);
console.log(Math.floor(index / M) + 1, (index % M) + 1);
