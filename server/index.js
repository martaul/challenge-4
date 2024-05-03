const http = require("http");
const port = 8000;

const fs = require("fs");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.example.html";
        break;
      case "/cars":
        req.url = "cars.html";
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })

  // //Error
  // .listen(port, '0.0.0.0', () => {
  //   console.log("server berjalan di http://0.0.0.0:%d", port)
  // })

  //Success
  .listen(port, "localhost", () => {
    console.log(
      "Server sudah berjalan, silahkan buka http://localhost:%d",port);
  });
