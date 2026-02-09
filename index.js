// import the express module
const express = require('express');
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');
const bannerRouter = require('./routes/banner');
const categoryRouter = require('./routes/category');
// Defined the port number the server will listen on
const PORT = 3000;

// create an instance of an express application
// because it gives us the starting point
const app = express();
// mongodb connection string
const DB = "mongodb+srv://pathekarhimanshi_db_user:pathekarhimanshi@cluster0.0vp6xeb.mongodb.net/?appName=Cluster0"
// middleware - to register routes or to mount routes
app.use(express.json());
app.use(authRouter);
app.use(bannerRouter);
app.use(categoryRouter);


mongoose.connect(DB).then(()=>{
    console.log('Mongodb Connected');
});

// start the server ans listen on the specified port
app.listen(PORT,"0.0.0.0", ()=> {
    // log the number
    console.log(`Server started on port ${PORT}`);

});

