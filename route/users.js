const express = require('express');
const router = express.Router();
var http = require('https');
const axios = require('axios');
const userAPI = 'https://jsonplaceholder.typicode.com/users';



router.get('/',(req,res)=>{
    
    // axios.get(`${UserAPI}`).then(users=>{ 
        
    //     var newList = [];
    //     var response = user.data;
    //     response.forEach(i => {
    //         console.log(i.name);
    //         newList.push({"name":i.name});
    //     });
    //     console.log("----------------------");
    //     console.log(newList);
    //     console.log("---------------------");
    //     res.status(200).json(newList);

    // })
    // .catch(error =>{
    //     console.log(error);
    //     res.status(500).send(error);
    // })


        var response;
        http.get(userAPI, function(res){
        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            response = JSON.parse(body);
            var newList = [];
            response.forEach(i => {
                console.log(i.name);
                newList.push({"name":i.name});
            });
            console.log("----------------------");
            console.log(newList);
            console.log("---------------------");
            res.status(200).json(newList);
            
        });
    }).on('error', function (err) {
        console.log('Error:', err);
    });

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