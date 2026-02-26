import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

// ✅ Trust proxy (IMPORTANT for Render + cookies)
app.set("trust proxy", 1);

// ✅ CORS configuration for local + production
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-interview-pi-lyart.vercel.app",
    ],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

// Port (Render automatically provides process.env.PORT)
console.log("PORT:", process.env.PORT);
const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDb();
});