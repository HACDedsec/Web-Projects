const express = require('express')
const app = express()

app.get("/" ,	function(req, res){

res.send("<h1>hey buddy</h1>")
});

app.get("/contact", function(req, res){

res.send("<h1>This is contacting page</h1>")
});

app.get("/aboutme" ,	function(req, res){

res.send("<h1>Hey</h1> </em> <h2> This is dedsec_hac</h2>")
});




app.listen(3000 , function() {

console.log("sereevr started on port 3000")
	// body...
});
