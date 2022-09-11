const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.static("cats"));
app.use("/cats", express.static("cats"));

app.get("/api/randomimage", (req, res) => {
  fs.readdir("cats/", (err, files) => {
    const random = Math.floor(Math.random() * files.length);

    res.json({ status: true, image: files[random] });
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
