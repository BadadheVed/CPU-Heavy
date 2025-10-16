import express from "express";

const app = express();
app.use(express.json());

app.get("/cpu", (req, res) => {
  let sum = 0;

  for (let i = 0; i < 1000000000; i++) {
    sum++;
  }
  res.json({
    message: "CPU heavy Tasks Done",
  });
});

app.listen(3000, () => {
  console.log(`app Running on the port ${3000}`);
});
