const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get("/job", async (request, response) => {
  try {
    const jobList = await axios.get(
      `https://serpapi.com/search.json?engine=google_jobs&q=software_developer&hl=en&api_key=${process.env.API_KEY}`
    );
    response.json(jobList.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api", async (request, response) => {
  const job = request.query.job;
  const location = "london";
  const jobList = await axios.get(
    `https://serpapi.com/search.json?engine=google_jobs&q=${job}&location=${location}&hl=en&api_key=${process.env.API_KEY}`
  );
  response.json(jobList.data);
});

app.listen(PORT, () => {
  console.log("server running");
});
