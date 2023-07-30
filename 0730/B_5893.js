const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let bin = "0b" + input;
const answer = (BigInt(bin) * 17n).toString(2);

console.log(answer);
