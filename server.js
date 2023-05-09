const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    let path = "./views/";
    switch (req.url) {
      case "/":
        path += "index.html";
        break;
      case "/about":
        path += "about.html";
        break;
      case "/contact":
        path += "contact.html";
        break;
      default:
        path += "404.html";
    }
    fs.readFileSync(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("Server running on port 3000");
  });
