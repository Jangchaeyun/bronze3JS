const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.toString());
}).on("close", function () {
  input.shift();
  input = input.map((el) => el.split(" ").map((el) => Number(el)));
  let cost = [350.34, 230.9, 190.55, 125.3, 180.9];

  for (let i = 0; i < input.length; i++) {
    let eachCost = input[i].map((el, idx) => el * cost[idx]);
    console.log(
      "$" + eachCost.reduce((past, curr) => past + curr, 0).toFixed(2)
    );
  }
  process.exit();
});
