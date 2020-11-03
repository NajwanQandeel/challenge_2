const express = require('expres');

let app = express();
app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json()) // to make the content header     application/json
// app.use(express.static(__dirname + './client/index'));

app.get('/upload_json', (req, res) => {
    console.log(req);
  })
  
  app.use('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
  });




app.listen(3000,() => {
    console.log("Server running on port 3000");
   });