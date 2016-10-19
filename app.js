var express = require('express');
var app = express();
  
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

var mongo=require('mongodb');
var mongoClient=mongo.MongoClient;
var url="mongodb://soww:soww@ds061506.mlab.com:61506/sowmi";



var user1,user2,pwrd,uc,uc2,useral,pwrd1,pwrd2,pass2;
var head,date,aut,descr;
app.post('/login', function(req,res) {
      user1 = req.body.user;
      pass2=req.body.pass;
  uc.find({username: user1}).toArray(function(err, docs) { 
    if(docs.length==0&&user1!=null&&pass2!=null){
      uc.insert({username:user1,password:pass2});
  res.sendFile(__dirname+'/home.html'); 
    }else if(docs.length!=0){
      console.log("user name already exists!!!");
      res.sendFile(__dirname+'/signup.html'); 
    }
})
   pwrd1 = req.body.pass1;
     pwrd2 =req.body.pass2;
     console.log(pwrd1)
   if(pwrd1==pwrd2){
uc.update({username:useral},
   {$set:{password:pwrd1}},{multi:true});
      res.sendFile(__dirname+'/login.html'); 
   }else{
    console.log("Password mismatch");
     res.sendFile(__dirname+'/changepass.html');
   }
});

app.post('/edit_page', function(req,res) {
     user2 = req.body.loguser;
     pwrd = req.body.logpass;
  uc.find({username: user2,password:pwrd}).toArray(function(err, docs) { 
     if(docs.length==0){
      console.log("Login details incorrect");
      res.sendFile(__dirname+'/login.html'); 
    }else{
      res.sendFile(__dirname+'/edit_page.html'); 
    }
})

  head= req.body.titl;
  date=req.body.dfc;
  aut=req.body.aun;
  descr=req.body.desp;
  uc2.insert({title:head,doc:date,img:"b1.jpg",an:aut,des:descr});
      res.sendFile(__dirname+'/edit_page.html'); 

});



app.post('/changepass', function(req,res) {
     useral = req.body.gotuser;
  uc.find({username: useral}).toArray(function(err, docs) { 
if(docs.length==0){
  console.log("incorrect username");
  res.sendFile(__dirname+'/forgotpass.html'); 
}else{
  res.sendFile(__dirname+'/changepass.html'); 
}
})
});




mongoClient.connect(url,function(err,db){
   uc=db.collection('userdetails');
   uc2=db.collection('blog');
})

app.use(express.static(path.join(__dirname, '/public'))); 

app.get('/', function (req, res) {
   res.sendFile(__dirname+'/home.html'); 
});
app.get('/home', function (req, res) {
   res.sendFile(__dirname+'/home.html'); 
});
app.get('/forgotpass', function (req, res) {
   res.sendFile(__dirname+'/forgotpass.html'); 
});
app.get('/changepass', function (req, res) {
   res.sendFile(__dirname+'/changepass.html'); 
});
app.get('/signup', function (req, res) {
   res.sendFile(__dirname+'/signup.html'); 
});
app.get('/login', function (req, res) {
   res.sendFile(__dirname+'/login.html'); 
});
app.get('/edit_page', function (req, res) {
   res.sendFile(__dirname+'/edit_page.html'); 
});
app.get('/add', function (req, res) {
   res.sendFile(__dirname+'/add.html'); 
});




app.get('/jsondata', function (req, res) {

 uc2.find().toArray(function(err, docs) {
  var jsondata = docs;
 res.send(jsondata);
 })
});  

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});



 