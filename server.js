const express = require('express');
const path = require('path');
const app = express();


const users = require('./route/users');

app.use(express.static(path.join(__dirname,'dist/Task')));

app.use('/users',users);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/Task/index.html'));

});
app.listen(4600,(req,res)=>{
    console.log('Running on server..');

});