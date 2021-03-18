const express = require("express");
const app = express();
const port = 4040;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The resultof addition is " + result);
});

app.listen(port, () => {
  console.log("Server listening to port 4040");
});
