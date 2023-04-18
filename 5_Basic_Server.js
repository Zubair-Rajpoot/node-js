const http = require("http"); //http module used to make basic server.
http.createServer((req, res) => {
    res.write("<h1>I am your response</h1>");
    res.end();
}).listen(4500); //createServer take a function as a parameter. and that function take 2 parameter, 1st is request and 2nd is response.
//listen function define the port.
