const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const result = (2 ** input + 1) ** 2;
console.log(result);
