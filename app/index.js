const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world! From Jainil, Sahi me chal gaya???");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
