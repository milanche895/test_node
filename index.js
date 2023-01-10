
// Importing express module
const express = require("express")
const app = express()
  
// Handling GET / request
app.use("/", (req, res, next) => {
    res.send("This is the express server")
})
  
// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})
  
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));