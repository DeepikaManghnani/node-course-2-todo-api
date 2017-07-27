// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);
// var user = {name:'deepika',age:"25"};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
	console.log(err);
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
   // db.collection('Todos').insertOne({
     // text: 'Something to do',
     // completed: false
   // }, (err, result) => {
     // if (err) {
       // return console.log('Unable to insert todo', err);
     // }
  
     // console.log(JSON.stringify(result.ops, undefined, 2));
  // });

 // db.collection('DemoOfBarbie').insertOne({
	// name: 'Barbie',
    // age: '22',
	// Location: 'Faritopia'
	 
 // }, (err,result)=> {
	 // if(err){
		 // return console.log('Unable to insert todo', err);
	 // }
	 // console.log(JSON.stringify(result.ops, undefined, 2));
 // });
  db.close();
});
