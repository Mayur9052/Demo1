// const {Pool, Client} = require('pg');

// const pool = new Pool(
//     {
//         user:'postgres',
//         host:'localhost',
//         password:'3563',
//         database:'erp_main',
//         port:5432
//     }
// )

// pool.query(`Select * from users`,(err,res)=>{
//     if(!err)
//     {
//         console.log(res.rows);
//     }
//     else{
//         console.log("error occured:"+err.message);
//     }
//    // console.log(err,res);
//     pool.end();
// })

const express=require('express');
const {Pool , Client}= require('pg');
const app=express();
const port=9000;

const bodyParser=require('body-parser'); 
// const { name } = require('ejs');

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/insert.html");
});


app.use(bodyParser.urlencoded({extended: false}))
app.get('/submit',function(req,res){
  console.log("Data Saved");
})

const connectionString='postgressql://postgres:joker123@localhost:9292/postgres'

const client= new Client({
    connectionString:connectionString
})

client.connect()

app.post("/",(req,res)=>{
    const {name, password}=req.body
   
    client.query('INSERT INTO joker (name, password) VALUES ($1, $2)', [name, password], (err,res)=> {
        console.log(err,res);

    })
   
    res.sendFile(__dirname + "/index.html");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
