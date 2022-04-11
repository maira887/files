
const { log } = require("console")
const express = require("express")
const app =express()
const PORT = 3001
app.get("/profile",(req,resp)=>{
    resp.send(data )
})

app.listen(PORT,()=>{
    console.log("server is running")
})
data=[
    {
       id:876,
       firstname:"maira",
       lastname:"yaseen",
       class:45 
    },

    {   id:879,
        firstname:"mahnoor",
        lastname:"yaseen",
        class:22

    },

    {   
        id:879,
        firstname:"maria",
        lastname:"yaseen",
        class:45

    },
]
app.get("/profile/:name",(req,res)=>{
     d = data.find(e=>{
        return e.firstname == req.params.name
    })
    res.send(d);
});
app.get("/data/:name/:agw/:sal",(req,res)=>{
    console.log(req.params);
    res.send(req.query)
});
app.get("/myquery",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
app.listen(PORT,()=>{
    console.log("good");
})