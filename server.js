"use strict";

const express = require("express");
const app = express();

const port = 8080;

require("dotenv").config();
const cors = require("cors");

const corsOptions = {
  origin: `http://localhost:${port}`,
};

app.use(cors(corsOptions));

app.use(express.static("./"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getRepos() {
  const endpoint = `https://api.github.com/users/AirenMarie/repos?per_page=100`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const repoURL = data.html_url;

    return repoURL;
  } catch (error) {
    console.error(error);
  }
}

app.get("/api/v1/getRepos", async (request, response) => {
  try {
    const repoList = await getRepos();

    console.log("Server found repos:", repoList);

    response.status(200).json({
      status: 200,
      data: repoList,
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C/Cmd+C to end this process.");
});
