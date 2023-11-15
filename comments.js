// Create web server
const express = require("express");
const app = express();
const port = 3000;
// Create a router
const router = express.Router();
// Create a route for the default URL path
router.get("/", (req, res) => {
  res.send("Welcome to my API!");
});
// Create a route for the /comments path
router.get("/comments", (req, res) => {
  res.send("Comments will be here soon!");
});
// Register the router with the app
app.use("/", router);
// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});