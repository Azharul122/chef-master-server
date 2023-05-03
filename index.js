const express = require("express");
const chef = require("./data/chef.json")
const reciepes = require("./data/reciepes.json")

const app = express();
const cors = require("cors");
app.use(cors())
const port = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send("running")
})

app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/specificChef/:id', (req, res) => {
    const chefid = req.params.id;
    if(chefid==0){
        res.send(singleChef)
    }
    const singleChef=chef.find(schef=>schef.chefId===parseInt(chefid))
    res.send(singleChef)
})
app.get('/chef/:id', (req, res) => {
    const chefId = req.params.id;
    if(chefId==0){
        res.send(reciepes)
    }
  else{
    const chefReciepes = reciepes.filter(reciepe => reciepe.chefId  === parseInt(chefId))
    res.send(chefReciepes)
  }
})

app.listen(port, () => {

})