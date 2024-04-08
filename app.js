import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.js";
import authRouter from "./routes/auth.js";
import testRouter from "./routes/test.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);


app.listen(8800, () => {
  console.log("Server start!");
});
