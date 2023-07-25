const fs = require("fs");
const input = parseInt(fs.readFileSync("./input.txt").toString().trim());

function Euclid(radius) {
  return Math.pow(radius, 2) * Math.PI;
}

function taxi(radius) {
  return Math.pow(radius, 2) * 2;
}

console.log(Euclid(input).toFixed(6));
console.log(taxi(input).toFixed(6));
