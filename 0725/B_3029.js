const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const curTime = input[0];
const targetTime = input[1];
console.log(sol(curTime, targetTime));

function sol(curTime, targetTime) {
  let curTimeSec = timeToSecond(curTime);
  let targetTimeSec = timeToSecond(targetTime);
  let answer = "";

  if (curTimeSec < targetTimeSec) {
    answer = secToTime(targetTimeSec - curTimeSec);
  } else {
    answer = secToTime(targetTimeSec + 86400 - curTimeSec);
  }
  return answer;
}

function timeToSecond(time) {
  let hh = parseInt(time.slice(0, 2));
  let mm = parseInt(time.slice(3, 5));
  let ss = parseInt(time.slice(6, 8));
  return (hh * 60 + mm) * 60 + ss;
}

function secToTime(sec) {
  let hh = Math.floor(sec / 3600) + "";
  let mm = Math.floor((sec % 3600) / 60) + "";
  let ss = Math.floor((sec % 3600) % 60) + "";

  return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
}
