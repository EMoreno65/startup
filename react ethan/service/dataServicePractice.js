const MongoClient = require("mongodb")

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = 'mongodb+srv://EthanMoreno:SecretPassword@mycluster.fkvtv.mongodb.net/?'

const client = new MongoClient(url);

const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);

const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));