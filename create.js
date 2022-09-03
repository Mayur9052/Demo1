const express=require('express');
const app=express();
const port=9000;

const h1 = require('./program')

// alert('Hello World' + h1);
console.log(h1);

app.get("/", (req, res) => {
    
    res.sendFile(__dirname + "/index.html");
    // document.write('Hrllo')

    console.log(h1);
});
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });
  