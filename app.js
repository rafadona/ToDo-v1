const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();

let items = ["Comprar comida","Cozinhar","Comer"];

app.set('view engine',"ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {

    let day = date.getDate();

    res.render("list", { listTitle: day,newListItems: items});

});

app.post("/",function(req,res){

  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");

})



app.listen(3300, function () {
    console.log('Server started on port 3300');
});