// Import required modules
const express = require("express");

// Create an Express app
const app = express();
const port = 3001; // Choose any port you prefer

// Define a route that returns a basic API response
app.get("/api/message", (req, res) => {
  // Define your message here
  const message = "I would recommend Apple, Windows or Chromebooks";
  const suggestedReplies = ["Apple", "Windows", "Chromebooks"];

  // Construct the API response object
  const apiResponse = {
    message: message,
    suggestedReplies: suggestedReplies,
  };

  // Send the API response as JSON
  res.json(apiResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
