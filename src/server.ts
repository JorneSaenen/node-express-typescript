// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import testRoutes from "./routes/exampleRoutes";
import { helloMiddleware } from "./middleware/exampleMiddleware";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", helloMiddleware, testRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});
