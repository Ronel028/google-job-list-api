const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/job", async (request, response) => {
  try {
    const jobList = await axios.get(
      `https://serpapi.com/search.json?engine=google_jobs&q=software_developer&hl=en&api_key=${process.env.API_KEY}`
    );
    response.json(jobList.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/job/api", async (request, response) => {
  const job = request.query.job;
  const location = "Makati";
  const jobList = await axios.get(
    `https://serpapi.com/search.json?engine=google_jobs&q=${job}&location=${location}&hl=en&api_key=${process.env.API_KEY}`
  );
  response.json(jobList.data);
});

module.exports = router;
