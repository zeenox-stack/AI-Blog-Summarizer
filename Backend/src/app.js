require("dotenv").config();

const express = require("express");
const cors = require("cors");

const summarize = require("./Summarizer/controller/controller");
const parser = require("./Parser/controller/controller");

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "prod"
        ? process.env.BACKEND_URL
        : "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/summarize", summarize);
app.use("/api/parse", parser);

module.exports = app;