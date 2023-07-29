const fs = require("fs");
ip = fs.readFileSync("./input.txt").toString().split("\n");
an = "";
for (i = 0; ; i++) {
  a = parseInt(ip[i]);
  if (a == 0) break;
  count = 1;
  num = 1;
  sum = 0;
  while (a > 0) {
    n = a % 10;
    sum += n * num;
    a = parseInt(a / 10);
    num *= ++count;
  }
  an += sum + "\n";
}

console.log(an);
