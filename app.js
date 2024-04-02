import express, { json } from "express";
import postRouter from "./routes/post.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/api/post", postRouter);
app.use("/api/auth", authRouter);



app.listen(8800, () => {
    console.log("Server start!");
})
