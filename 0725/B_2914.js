const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ");
console.log(input[0] * (input[1] - 1) + 1);
