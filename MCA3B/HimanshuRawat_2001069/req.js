var http = require("http")
var server  = http.createServer((req,res)=>{
    if(req.url="/")
    res.end("You are at homepage")
    else if(req.url == "/contact")
    res.end("You are at contacts")
    else 
    res.writeHead(404)
    res.end() 
})
server.listen(4002,"127.0.0.1",()=>{
    console.log("connceting to the server")
})