const obj = require('./utils');
console.log(obj);
const arr1 = [2,3,4,5];
const sum = obj.getArraySum(arr1);
console.log(sum);
const userName = '12345';
const pwd = '121321321421312';
const checkUserName = obj.checkUserName(userName);
const checkPwd = obj.checkPwd(pwd);
console.log(checkUserName);
console.log(checkPwd);
