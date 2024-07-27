const checkUserName = (userName) => {return userName.length > 10}
const checkPwd = (pwd) => {return pwd.length > 10}
module.exports = {
    checkUserName,
    checkPwd
}