import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// import express from "express";
// import ufo from "./ufo.js";
// import { MongoClient } from "mongodb";
// //const { MongoClient } = require("mongodb");

// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://ramziosta:dbUserPassword@cluster0.lznw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const client = new MongoClient(uri);



// const app = express();
// const PORT = 5000;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.listen(PORT,console.log(`express running on ${PORT}`));

// app.get("/ufo", async (req,res)=>{
//   async function run() {
//     try {
//       await client.connect();
  
//       const database = client.db('ufo');
//       const alien = database.collection('sightings');
  
//       // Query for a movie that has the title 'Back to the Future'
//       const query = { State :"NJ" };
//       const tt = await alien.findOne(query);
  
//       return tt;
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   const results = await run().catch(console.dir)
//  res.send(results);
// });

