require('dotenv').config()
const express = require('express')
const app = express();

const port=400;



app.get('/twiter',(req,res)=>{
    res.send('Byas Paswan')
})

app.get('/login',(req,res)=>{
    res.send(`<h1> Please Login at code and chai`)
})


app.listen(process.env.PORT,()=>{
    console.log(`Example app is running on port ${port}`)
})