const fs = require("fs");
fs.writeFile("../static/test.txt", "hello world", (err) => {
  if (err) console.log(err);
  else console.log("写入成功");
});

fs.readFile("../static/test.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});

var getSum = (arr) =>
  arr.reduce(
    // function(prev,cur){
    //     return prev + cur
    // },0
    (prev, cur) => (prev += cur),
    0
  );
var arr1 = [1,2,3,4];
var sum = getSum(arr1)
console.log(sum);
