var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
 });