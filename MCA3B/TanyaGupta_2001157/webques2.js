const http=require("http");
const server = http.createServer((req,res) => {
    res.end("SUCCESS");
});
server.listen(8001,"127.0.0.1",() => {
    console.log("PORT NUMBER IS 8002");
});
