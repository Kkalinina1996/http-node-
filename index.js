import http from "http";
import fs from "fs";


const server = http.createServer((req, res) => {

  const log = new Date() + " | " + req.method + " | " + req.url + "\n";

  fs.appendFile("requests.log", log, (err) => {
    if (err) {
      console.log("Error writing to file");
    }
  });

  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Request logged");

});


server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});