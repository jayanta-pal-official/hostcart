import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://116.202.104.108:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,"0.0.0.0", () =>
  console.log(`Server is Listening on port ${PORT}`)
);
