const express = require("express");
const Hero = require("./models/heromodel")
const app = express();
const connectDB = require("./config/db");
connectDB();



app.use(express.json());
//API ROUTES

// app.get("/",(req,res)=>{ 

//     res.json({msg: 'API server is running'} );
// })
app.get("/superheros",async (req,res)=>{
  try {
    const heros = await Hero.find({})
    res.json(heros);
  } catch (error) {
    console.error("An error occurred.", error);
    res.status(500).json({ error: "An error occurred." });
  }
})

// :superHeroID You have defined :superHeroId as a route parameter by including a colon : before it. This tells Express that superHeroId is a dynamic part of the UR L, 
app.get("/superheros/:superHeroId",async  (req,res)=>{
    // res.json({msg: 'Super hero ID ' + req.params.superHeroId} );
    try {
        const hero =await Hero.findById(req.params.superHeroId)
        res.json(hero)
       } catch (error) {
        console.log(error);
       }
})


app.post("/superheros",async (req,res)=>{
    try {
        await Hero.create({
             superheroname: req.body.superheroname,
             name: req .body.name,
        })
        res.json({msg: "Superhero created" } );
    } catch (error) {
        console.log(error);
    }
    
})
// we need id in this put request because we'll have to edit one super hero by id
app.put("/superheros/:superHeroId",async (req,res)=>{
    // res.json({msg: "Editing  Superhero " + req.params.superHeroId} );
    try {
         await Hero.findByIdAndUpdate(req.params.superHeroId,{
            superheroname: req.body.superheroname,
            name: req .body.name,
         })
         res.status(200).json({msg:"Hero is updated"})
    }   catch (error) {
        console.log(error);
    }
    
})

app.delete("/superheros/:superHeroId", async(req,res)=>{
    // res.json({msg: "Deleting Superhero " + req.params.superHeroId} );
    try {
        await Hero.findByIdAndDelete(req.params.superHeroId);
        res.json({msg:"Hero Removed"})
   } catch (error) {
       console.log(error);
    }

})



app.listen(3000,function(req,res) {
    console.log("server started on port 3000:");
})