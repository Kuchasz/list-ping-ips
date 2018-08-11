const express = require("express");

const app = express();

const ips = [];

app.get('/ping', (req, res)=>{
    ips.push(req.ip);
    res.send(JSON.stringify(req));
});

app.get("/", (req, res)=>{
    res.send(JSON.stringify(ips));
});

app.listen(process.env.PORT || 8080);