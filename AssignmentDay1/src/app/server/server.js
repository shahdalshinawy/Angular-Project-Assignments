const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const port=3000;
const app=express();
app.use(bodyparser.json());
app.use(cors());
app.get('/',function(req,res){
    res.send("Hello from server");
})
app.listen(port,function()
{
    console.log("server is running on port = ",port);
})
app.post('/register',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"recevied successfully"});
})