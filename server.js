var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (request, response, next)=>{
  response.send(`
    <h1 id = "heading">Hello,World</h1>
    <form name="student_details" action="/" method="POST" autocomplete="on">
      <label for="fname">First Name:</label>
      <input type="text" id = "fname" name="fname" value=""><br><br>
      <label for="lname">Last Name:</label>
      <input type="text" id = "lname" name="lname" value=""><br><br>
      <label for="age">Age:</label>
      <input type="number" id = "age" name="age" value=""><br><br>
      <input type="submit" value="Submit">
    </form>
  `);
});

app.post('/', (request, response, next)=>{
  console.log('request');
  response.send(request.body);
  console.log("Success");
});


app.listen(6969, ()=>{
  console.log("app is running on localhost:6969/");
})






// const server = http.createServer((req, res) => {
//   if (req.url == "/student_details") {
//     res.statusCode = 200;
//     res.write("success");
//     return res.end();
//   }
//   else {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, (err, data) => {
//     res.setHeader('Content-Type', 'text/html');
//     if (err) {
//       res.statusCode = 404;
//       return res.end("404 Oops we are out");
//     }
//     res.statusCode = 200;
//     res.write(data);
//     return res.end();
//   });
// }
// });
//
// server.listen(6969, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
