const express = require('express');
const router = express.Router();

const axios = require('axios');
const UserAPI = 'https://jsonplaceholder.typicode.com/users';

router.get('/',(req,res)=>{

    axios.get(`${UserAPI}`).then(users=>{ 
        res.status(200).json(users.data);
    })
    .catch(error =>{
        res.status(500).send(error);
    })

});

module.exports = router;
















































/*var http = require('https');
var url = 'https://jsonplaceholder.typicode.com/users';
var response;

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });
    res.on('end', function(){
        response = JSON.parse(body);
        
    });
}).on('error', function (err) {
    console.log('Error:', err);
});

const userRoute = (app, fs) => {
    

    app.get('/users', (req, res) => {

        response = response.slice(0,3);
        var newList = [];
        response.forEach(i => {
            newList.push({"name":i.name});
        });
        res.send(JSON.parse(JSON.stringify(newList)));
    });
};

module.exports = userRoute;*/