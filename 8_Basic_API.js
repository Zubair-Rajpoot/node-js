const data = require("./8_data")
const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);