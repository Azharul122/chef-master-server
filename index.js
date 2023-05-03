const express=require("express");
const chef=require("./data/reciepe.json")
const app=express();
const cors=require("cors");
app.use(cors())
const port=process.env.PORT || 5000
app.get('/',(req,res)=>{
res.send("running")
})

app.get('/chef',(req,res)=>{
res.send(chef)
})


app.listen(port,()=>{

})