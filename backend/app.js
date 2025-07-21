const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const postRoutes = require('./routes/posts');
const userRoutes = require("./routes/user");  // <-- Added user routes import

const app = express();


mongoose.connect("mongodb+srv://genesiscadiz0:ryuzenhaha@cluster0.rn0vsic.mongodb.net/node-angular-database?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Connection error", err));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve images statically from backend/images
app.use("/images", express.static(path.join(__dirname, "images")));

// Enable CORS for all requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader(  
    "Access-Control-Allow-Headers",  
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );   // <-- Added this line exactly as requested
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
  next();
});

// Use posts routes for /api/posts endpoint
app.use('/api/posts', postRoutes);

// Use user routes for /api/user endpoint
app.use("/api/user", userRoutes);

module.exports = app;