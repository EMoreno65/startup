const { MongoClient } = require('mongodb');
const uuid = require('uuid');
// const config = require('./dbConfig.json');

// Connect to the database cluster
const url = `mongodb+srv://EthanMoreno:SecretPassword@mycluster.fkvtv.mongodb.net`;
const client = new MongoClient(url);
const db = client.db('user_base');
const username_collection = db.collection('usernames');
const password_collection = db.collection('passwords');
const authToken_collection = db.collection('authTokens');

  // Test that you can connect to the database
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
  }

  function getUser(email) {
    return userCollection.findOne({ email: email });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }

//   await collection.deleteMany({}); // Delete this at somepoint
  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));

main().catch(console.error);

module.exports = {
    createUser,
    getUser,
    getUserByToken
}