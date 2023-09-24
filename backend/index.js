const express = require('express');
const app = express();
const cors = require('cors');
const mongoose  = require('mongoose');
const PORT = 8000;


app.use(cors());

mongoose.connect("mongodb://localhost:27017/sampleDB")
.then(()=>{
    console.log("Connected to the MongoDB Database");
})
.catch(e=>{console.log(e)})

app.get('/hello',(req,res)=>{
    res.json({meesage: 'Hello World'});
})


app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
})
