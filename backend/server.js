import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// 🔥 Import routes
import companyRoutes from "./routes/companyroutes.js";
import studentRoutes from "./routes/studentroutes.js";
import placementRoutes from "./routes/placementroutes.js";
import recommendRoutes from "./routes/recommendroutes.js";

dotenv.config(); // 🔥 VERY IMPORTANT

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

/* 🔥 API ROUTES (NEW) */

// Company APIs
app.use("/api/companies", companyRoutes);

// Student APIs
app.use("/api/students", studentRoutes);

// Placement APIs
app.use("/api/placements", placementRoutes);

// Recommendation API
app.use("/api/recommend", recommendRoutes);


/* test routes  */

// Health Check
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Test DB Connection
app.get("/api/test/db", (req, res) => {
  res.json({ status: "✅ MongoDB Connected Successfully" });
});

// Test Student Model
app.get("/api/test/students", (req, res) => {
  res.json({ 
    message: "Student route works", 
    method: "GET /api/students" 
  });
});

// Test Company Model
app.get("/api/test/companies", (req, res) => {
  res.json({ 
    message: "Company route works", 
    method: "GET /api/companies" 
  });
});

// Test Placement Model
app.get("/api/test/placements", (req, res) => {
  res.json({ 
    message: "Placement route works", 
    method: "GET /api/placements" 
  });
});

// Test Skills Model
app.get("/api/test/skills", (req, res) => {
  res.json({ 
    message: "Skills route works", 
    method: "GET /api/skills" 
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


/* Start Server */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});