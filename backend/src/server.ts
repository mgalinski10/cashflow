import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/auth", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === "michal" && password === "123") {
    // HARDCODED for test, need to connect with DB
    res.status(200).json({ status: "success", message: "Login successful" });
  } else {
    res.status(401).json({
      status: "failed",
      message: "Something went wrong :( try again..",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
