import express from "express";
import cors from "cors";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Basic health check endpoint
  app.get("/api/ping", (req, res) => {
    res.json({ message: "Server is running", timestamp: new Date().toISOString() });
  });

  // Demo endpoint
  app.get("/api/demo", (req, res) => {
    res.json({ 
      message: "Demo endpoint working",
      data: { example: "value" }
    });
  });

  return app;
}