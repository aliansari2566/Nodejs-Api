const express = require("express");
const app = express();

//API ROUTES

app.get("/",(req,res)=>{
    // res.send("hello word ?"); 
    res.json({msg: 'API server is running'} );
})
app.get("/superheros",(req,res)=>{
    res.json({msg: 'showing alll heros'} );
})

// :superHeroID You have defined :superHeroId as a route parameter by including a colon : before it. This tells Express that superHeroId is a dynamic part of the URL, 
app.get("/superheros/:superHeroId",(req,res)=>{
    res.json({msg: 'Super hero ID ' + req.params.superHeroId} );
})


app.post("/superheros",(req,res)=>{
    res.json({msg: "Creating Superhero" } );
})
// we need id in this put request because we'll have to edit one super hero by id
app.put("/superheros/:superHeroId",(req,res)=>{
    res.json({msg: "Editing  Superhero " + req.params.superHeroId} );
})

app.delete("/superheros/:superHeroId",(req,res)=>{
    res.json({msg: "Deleting Superhero " + req.params.superHeroId} );
})



app.listen(3000,function(req,res) {
    console.log("server started on port 3000:");
})