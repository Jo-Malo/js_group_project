const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if (err) {
  console.error(err);
}
  const db = client.db('cryptid_hub');
  const cryptidsCollection = db.collection('cryptids');
  const cryptidsRouter = createRouter(cryptidsCollection)
  app.use('/api/cryptids', cryptidsRouter);
});

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
