//const sass = require('sass');
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    
    res.status(200).sendFile(path.resolve(__dirname,'index.html'))
})
app.listen(5000);



