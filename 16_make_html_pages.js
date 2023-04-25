// make folder for html files and access it: (public Folder)
// make html files: Create static files manually.
// load html files: Load files by accessing the Public Folder using express js.
// interview Question:

const express = require("express");
const path = require('path');
let app = express();

let publicPath = path.join(__dirname,"public");

app.use(express.static(publicPath));

app.listen(5000);
