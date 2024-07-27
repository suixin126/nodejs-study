const http = require('http');
const server = http.createServer();
const fs = require('fs')
server.on('request',(req,res)=>{
    if(req.url == '/index.html'){
        fs.readFile('../dist/index.html',(err,data)=>{
            if(err) console.log(err);
            else {
                res.setHeader("Content-Type","text/html;charset=utf-8");
                res.end(data.toString());
            }
        })
    }else {
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end("请求错误");
    }
})
server.listen(3000,()=>{
    console.log("Web服务启动");
})