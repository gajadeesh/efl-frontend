const port = process.env.PORT || 80;
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(_req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log("server started");
