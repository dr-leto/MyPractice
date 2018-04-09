var http = require("http");
var path = require("path");
var fs = require("fs");
var count = 0;

const server = http.createServer(function(request, response){
    console.log("Request " + count +  " is running");
    count++;
    var file = "." + request.url;
    if (file==="./home"){
        file = "./index.html";
    }

    var extname = path.extname (file);
    var contentType = "text/html";
    switch (extname) {
        case ".js":{
            contentType = "text/javascript";
            break;
            }
        case ".css":{
            contentType = "text/css";
            break;
            }
        case ".jpg":{
            contentType = "image/jpg";
            break;
            }
    }

    fs.readFile(file, function (error, content){
        if (error){
            fs.readFile("./error.html", function(error, content) {
                response.writeHead(200, { "Content-Type": contentType });
                response.end(content, "utf-8");
            });
        }
        else{
            response.writeHead(200, { "Content-Type": contentType });
            response.end(content, "utf-8");
        }
    });

});

server.listen(3000, "localhost", function(){
    console.log("Server is working!")});