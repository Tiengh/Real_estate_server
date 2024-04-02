import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Post router start!");
})

export default router;