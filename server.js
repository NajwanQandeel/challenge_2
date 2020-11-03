const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var multer  = require('multer');
var buffer = require('buffer/').Buffer
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/client/index.html");
});

app.post("/upload", upload.single('file'), async (req, res) => {    
  var b = req.file["buffer"]
  console.log(b.toString())
  res.send(b.toString())
});



app.listen(3000,() => {
    console.log("Server running on port 3000");
   });