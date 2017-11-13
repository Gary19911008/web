
var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function(req, res){

	//从前端url请求中截取？后边的数据
	 var queryObj = url.parse(req.url, true).query;
	 /*
	    queryObj = {"callback": "handler"}
	 */

	 console.log(queryObj);

	 fs.readFile("./test.json", function(err, data){
		 res.write(queryObj.callback + "(" + data  + ")");// "handler({'name':'lisi', 'age':10})"
		 res.end();
	 });

}).listen(8000);

console.log("监听 127.0.0.1:8000 ...");
