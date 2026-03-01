const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {

  // Set CORS header (allow all origins)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Set response content type to JSON
  res.setHeader("Content-Type", "application/json");

  // Check if request is POST and URL is /submit
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    // Listen for incoming data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When all data is received
    req.on("end", () => {
      console.log("Request body received:");
      console.log(body);

      // Send success response
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: "POST request processed" })
      );
    });

  } else {
    // Handle unknown routes
    res.statusCode = 404;
    res.end(
      JSON.stringify({ message: "Route not found" })
    );
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});