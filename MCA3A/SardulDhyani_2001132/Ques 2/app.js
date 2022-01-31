const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hi, Your request have reached to the server");
    res.end();
  })
  .listen(8080, () => {
    console.log("Listening on Port 8080");
  });
