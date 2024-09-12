"use strict";

var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"](path.join(__dirname, "../../frontend", "public")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend", "public", "index.html"));
});
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});