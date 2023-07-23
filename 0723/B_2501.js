const fs = require("fs");
const [N, K] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

let ans = [];

for (let i = 1; i <= N; i++) {
  if (N % i == 0) {
    ans.push(i);
  }
}

if (ans.length < K) {
  console.log(0);
} else {
  console.log(ans[K - 1]);
}
