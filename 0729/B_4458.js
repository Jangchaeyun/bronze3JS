let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
for (let i = 1; i <= +input[0]; i++) {
  let result = input[i][0].toUpperCase() + input[i].slice(1);
  console.log(result);
}
