 import http from "http";
import moment from "moment";

// Create server
const server = http.createServer((req, res) => {

  // Get current date and time using moment
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

  // Set response status and headers
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=3600");

  // Send response with current date and time
  res.end("Current date and time: " + currentDate);

});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});