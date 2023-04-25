// make folder for html files and access it: (public Folder)
// make html files: Create static files manually.
// load html files: Load files by accessing the Public Folder using express js.
// interview Question: kya hum iss tareeqy se public Folder mn CSS file rakh kr ussy use kr skty hain?
// Answer: Ni use ni kr skty. lkn iss kaam krnhy ka aik or alag se tareeka hota hai wo next dekhein gy.

const express = require("express");
const path = require('path');
let app = express(); // executable express.

let publicPath = path.join(__dirname,"public");

app.use(express.static(publicPath));

app.listen(5000);
