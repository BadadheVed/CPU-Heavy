import express from "express";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(middleware);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/cpu", (req, res) => {
  const time = Date.now();
  for (let i = 0; i < 100000000; i++) {
    Math.random();
  }

  res.send(
    `CPU Intensive Task Completed time taken by it is ${Date.now() - time} ms`
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
