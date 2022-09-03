const https = require('http');
const express=require('express');
const app=express();
const port=9000;

const  {Pool} = require('pg')

const pool = new Pool(
        {
            user:'postgres',
            host:'localhost',
            password:'joker123',
            database:'postgres',
            port:9292
        }
    )

  


const bodyParser=require('body-parser'); 
const { response } = require('express');

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    
  pool.query(`Select * from joker`,(err,res)=>{
    if(!err)
    {
        console.log(res.rows);
    }
    else{
        console.log("error occured:"+err.message);
    }
    response.write(res.rows);
    pool.end();
})
  res.sendFile(__dirname + "/index.html");
  
});


app.use(bodyParser.urlencoded({extended: false}))
app.get('/submit',function(req,res){
  console.log("Data Saved");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


