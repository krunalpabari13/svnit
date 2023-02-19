const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const url = "mongodb://localhost:27017/SVNIT";

// app.post('/registration', (req, res) => {
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("SVNIT");
//     const user = req.body; // assuming the request body contains user data
//     dbo.collection("registration").insertOne(user, function(err, result) {
//       if (err) throw err;
//       console.log("User saved to database");
//       db.close();
//       res.send("User saved to database");
//     });
//   });
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
