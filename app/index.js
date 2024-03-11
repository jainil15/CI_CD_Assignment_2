const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world! From Jainil!! ANOTHER !! 222222 !!!!! ON ECS 2 2 THis is testing asg WOKRING!!!!!!!!!!!!!! SAHI ME?");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
