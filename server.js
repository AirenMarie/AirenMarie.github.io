"use strict";

const express = require("express");
const app = express();

const port = 8080;

app.use(express.static("AirenMarie.github.io"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C/Cmd+C to end this process.");
});
