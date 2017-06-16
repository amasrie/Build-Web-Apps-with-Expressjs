var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    if(err) res.send(err);
    try{
      res.json(JSON.parse(data));    
    }catch(e){
      res.send(500);
    }
  });
});

app.listen(process.argv[2])