const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

// app.get("/job", async (request, response) => {});

app.use("/", require("./route/jobList"));

app.listen(PORT, () => {
  console.log("server running");
});
