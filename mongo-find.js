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
  
  db.collection('Todos').find({completed:false}).toArray().then((docs) =>{
	 console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
	  console.log('Unable to fetch todos', err);
  });
  
  db.collection('Todos').find().count().then((count) =>{
	 console.log('Todos');
     console.log(`count of documents are :- ${count}`);
  }, (err) =>{
	  console.log('Unable to fetch todos', err);
  });
  // 	db.close();
});
