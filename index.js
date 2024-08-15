const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri); //conexão com o mongo

/*
async function run() {
  try {
    const database = client.db('db_teste'); //conecta com o banco de dados informado
    const users = database.collection('col_teste');

    /* atualizar dados 
    const filter = { name: "roberto blue" };
    // update the value of the 'quantity' field to 5
    const updateDocument = {
      $set: {
        email: "jose_blue@gmail.com",
      },
    };
    const result = await users.updateOne(filter, updateDocument);
    */

/* deletar usuario no mongo
try {
  var doc = { color: "purple" }
  await users.deleteOne(doc);
  console.log("user deletado");
} catch (error) {
  console.log(error);
}
*/

/* inserir varios dados no mongo
try {
  let docs = [
     { "name": "jose red", email: "jose@gmail.com"},
     { "name": "joao purple", email: "joao@gmail.com"},
     { "name": "juliana yellow", email: "jul@gmail.com"},
     { "name": "roberto blue", email: "ro@gmail.com"}
  ];
  const insertManyresult = await users.insertMany(docs);
  let ids = insertManyresult.insertedIds;
  console.log(`${insertManyresult.insertedCount} documents were inserted.`);
  for (let id of Object.values(ids)) {
     console.log(`Inserted a document with id ${id}`);
  }
} catch(e) {
  console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
  let ids = e.result.result.insertedIds;
  for (let id of Object.values(ids)) {
     console.log(`Processed a document with id ${id._id}`);
  }
  console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
}
*/

/* inserir 1 dado no db
var doc = { name: "Maria Brown", email: "maria@gmail.com" };
var result = await users.insertOne(doc);
console.log(
  `A document was inserted with the _id: ${result.insertedId}`,
);
*/

/*  buscar dados no mongo
const query = { name: 'Maria Brown' };
const user = await users.findOne(query);
console.log(user);
 



} finally {
// Ensures that the client will close when you finish/error
await client.close();
}
}
run().catch(console.dir);
*/


MongoClient.connect
client.connect
const database = client.db('db_teste'); //conecta com o banco de dados informado
const users = database.collection('col_teste');


function findUser(id) {
  const query = { _id: id };
  const user = users.findOne(query);
  return (user)
}

function insertUser(name) {
  var doc = { id: name};
  var result = users.insertOne(doc);
 // return "feito"
}


function teste() {
  return "funciona";
}

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to about us page');
});

app.get('/contact', (req, res) => {
  res.send('Welcome to contact us page');
});

app.get('/user/:id', (req, res) => {
  var usuario = findUser(req.params.id)
  res.send(usuario);
}
);

app.post('user/:name', (req, res) => {
  var name = req.params.name
  insertUser(name)
  res.send("foi");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});