const fs = require("fs");
input = fs.readFileSync("./input.txt").toString().split("\n");
k = 0;
t = parseInt(input[k++]);
for (i = 0; i < t; i++) {
  sum = 0;
  n = parseInt(input[k++]);
  v = input[k++].split(" ").map(Number);
  for (j = 0; j < n; j++) {
    a = parseInt(v[j]);
    sum += a;
  }
  console.log(sum);
}
