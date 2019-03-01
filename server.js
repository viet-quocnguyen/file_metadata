var express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var bodyParser = require("body-parser");
var cors = require("cors");
// Basic Configuration
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/api/fileanalyse", upload.single("document"), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
