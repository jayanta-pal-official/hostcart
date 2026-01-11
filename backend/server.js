import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import db from "./db/db.js";
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://46.224.135.138",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.get('/db-test', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.json({ status: 'DB connected' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend working' })
})

app.use("/api", userRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,"0.0.0.0", () =>
  console.log(`Server is Listening on port ${PORT}`)
);
