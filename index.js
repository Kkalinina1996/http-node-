import http from "http";
const port = 3333;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  console.log(req.headers);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.end("Main Page");
    } else if (req.url === "/about") {
      res.end("About Page");
    } else if (req.url === "/contacts") {
      res.end("Contacts Page");
    } else {
      res.statusCode = 404;
      res.end("Page not found");
    }
  } else if (req.method === "POST") {
    if (req.url === "/submit") {
      req.end("Form submitted!");
    } else {
      res.statusCode = 404;
      res.end("Page not found");
    }
  } else {
    res.statusCode = 405;
    res.end("Method not allowed");
  }
});
server.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});