const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let issues = [];

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.post("/issues", (req, res) => {
  const newIssue = {
    id: Date.now(),
    ...req.body,
  };

  issues.push(newIssue);

  res.json({
    message: "Issue Added Successfully",
    data: newIssue,
  });
});
app.get("/issues", (req, res) => {
  res.json(issues);
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});