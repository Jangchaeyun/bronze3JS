const fs = require("fs");
ip = fs.readFileSync("./input.txt").toString().split("\n");
n = parseInt(ip[0]);
for (i = 1; i <= n; i++) {
  v = ip[i].split(" ");
  a = parseInt(v[0]);
  b = parseInt(v[1]);
  c = parseInt(v[2]);
  sum = a * a + b * b + c * c;
  ma = Math.max(a, Math.max(b, c));
  if (sum == 2 * ma * ma) {
    console.log(`Scenario #${i}:`);
    console.log("yes\n");
  } else {
    console.log(`Scenario #${i}:`);
    console.log("no\n");
  }
}
