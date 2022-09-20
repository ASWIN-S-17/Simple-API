const express = require('express')
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts')
const app = express();
require('dotenv/config')
app.use(express.json())

app.use('/posts',postsRoute)


//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home');
});


//Connect db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
    console.log('Connected to DB');
})



app.listen(5000,(req,res)=>{
    console.log('Server is listening on port 5000')
})