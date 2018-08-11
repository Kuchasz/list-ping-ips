const express = require("express");

const app = express();
app.enable('trust proxy');

const ips = [];

app.get('/ping', (req, res)=>{
    ips.push(req.ip);
    res.send(req.ip);
});

app.get("/", (req, res)=>{
    const uniqueIps = ips.filter(function(item, pos) {
        return ips.indexOf(item) == pos;
    });

    res.send(uniqueIps);
});

app.listen(process.env.PORT || 8080);