const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger"); 
const converter = require("./services/converter");
const client = require("prom-client");
const tracer = require("./tracing"); 

const app = express();
app.use(cors());

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    logger.error("Error generating metrics:", err);
    res.status(500).send("Failed to load metrics");
  }
});

// API Route with Tracing
app.get("/romannumeral", async (req, res) => {
  // app.get("/api/convert", async (req, res) => {
  const span = tracer.startSpan("convert-roman-numeral"); 
  try {
    const query = req.query.query;
    logger.info(`Received request with query: ${query}`);

    if (!query || isNaN(query) || query < 1 || query > 3999) {
      span.setAttribute("error", true);
      logger.error(`Invalid input received: ${query}`);
      return res.status(400).json({ error: "Invalid input" });
    }

    const result = converter(Number(query));

    logger.info(`Converted ${query} to ${result}`);
    res.json({ input: query, output: result });

    span.setAttribute("success", true);
  } catch (error) {
    span.setAttribute("error", true);
    logger.error("Conversion error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    span.end(); 
  }
});


app.get("/error-test", (req, res) => {
  try {
    throw new Error("Test Error Triggered!");
  } catch (error) {
    logger.error("Manually triggered test error:", error);
    res.status(500).json({ message: "Error logged in error.log" });
  }
});

app.get("/", (req, res) => {
  logger.info("Home route accessed");
  res.send("Hello, World!");
});

const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
  console.log(`INFO: Server is running on port ${PORT}`);
});
