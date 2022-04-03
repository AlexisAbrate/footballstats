const fetch = require("node-fetch");
​
var MongoClient = require("mongodb").MongoClient;
​
var url = "mongodb://localhost:27017/";
​
​
​
// https://api.openweathermap.org/data/2.5/weather?q=Toulouse&lang=fr&units=metric&appid=4dd7bb5e8f098fcc8694f07327fc433f   meteo
​
// http://api.openweathermap.org/data/2.5/air_pollution?lat=43.599563&lon=1.418764&appid=4dd7bb5e8f098fcc8694f07327fc433f   pollution
​
​
​
//=================== Au lancement je drop database puis je recupere les données (car la recupération via la boucle se fait a la fin du premier temps de l'interval)
​
​
MongoClient.connect(url, function(err, db){
  
    // Reference of database
    const connect = db.db("football");
    
    // Dropping the database
    connect.dropDatabase();
  
    console.log("Dropping successful");
});
​
// Get all leagues 
const url = "https://v3.football.api-sports.io/leagues"
fetch(url, {method : "GET",
            withCredentials: true,
            headers: {
                "x-apisports-key": "a6f8e98240e4127937a2bfb28e38de11",
                "Content-Type": "application/json"
            }})
.then(reponse => console.log(reponse.json()))
/*.then(json => {
    console.log(json);
​
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
​
        var dbo = db.db("football");
        console.log("dbo : " + dbo);
        
        var myobj = json;
        console.log("myobj : " + myobj);
​
        dbo.collection("leagues").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    })
})*/
​
​

/*setInterval(function(){
​
    MongoClient.connect(url, function(err, db){
  
        // Reference of database
        const connect = db.db("meteo");
        const connect2 = db.db("pollution");
      
        // Dropping the database
        connect.dropDatabase();
        connect2.dropDatabase();
      
        console.log("Dropping successful");
    });
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Toulouse&lang=fr&units=metric&appid=4dd7bb5e8f098fcc8694f07327fc433f", {"method": "GET"})
    .then(reponse => reponse.json())
    .then(json => {
        console.log(json);
    
        MongoClient.connect(url, function(err, db){
            if (err) throw err;
    
            var dbo = db.db("meteo");
            console.log("dbo : " + dbo);
            
            var myobj = json;
            console.log("myobj : " + myobj);
    
            dbo.collection("dataMeteo").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            })
        })
    })
    
    fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat=43.599563&lon=1.418764&appid=4dd7bb5e8f098fcc8694f07327fc433f", {"method": "GET"})
    .then(reponse => reponse.json())
    .then(json => {
        console.log(json);
    
        MongoClient.connect(url, function(err, db){
            if (err) throw err;
    
            var dbo = db.db("pollution");
            console.log("dbo : " + dbo);
            
            var myobj = json;
            console.log("myobj : " + myobj);
    
            dbo.collection("dataMeteo").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            })
        })
    })
​
    
  },5000);*/