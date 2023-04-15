// Import the necessary modules
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/app";

// Create an instance of Express
const app = express();

// Define a route
app.get("/", (req, res) => {
  // Render the React component to a string
  const html = renderToString(<App />);

  // Send the rendered HTML as response
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My SSR React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

// Start the server
const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
