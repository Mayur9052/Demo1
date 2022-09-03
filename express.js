const express = require('express');

const app = express();

app.get('/', (err, res) => {
    res.send("Hello world!");
});

app.listen(4000);