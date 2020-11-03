const express = require("express");
const app = express();
var bodyParser = require("body-parser");


// var buffer = require('buffer/').Buffer
// var storage = multer.memoryStorage();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/client/index.html");
});

app.post('/upload_json', (req, res) => {
    // console.log(req.body)
         // JSON to CSV Converter
         function arrayToCSV (req.body) {
            csv = data.map(row => Object.values(row));
            csv.unshift(Object.keys(data[0]));
            result= csv.join('\n');
          }

    res.end(result)
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
   });