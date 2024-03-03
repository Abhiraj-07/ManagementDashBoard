const express = require("express");

const app = express();
const port = 3000;

const path = require("path");

const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "register.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "login.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "about.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "register.html"));
});

app.get("/tandc", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "tandc.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
