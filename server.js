const express = require("express");

const app = express();
app.enable('trust proxy');

const ips = [];

app.get('/ping', (req, res)=>{
    ips.push(req.ip);
    res.send(req.ip);
});

app.get("/", (req, res)=>{
    res.send(JSON.stringify(ips));
});

app.listen(process.env.PORT || 8080);