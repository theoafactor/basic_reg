const express = require("express");
const { MongoClient } = require('mongodb');
const cors = require("cors");
require("dotenv").config();
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);


//create server
const server = express();

// middleware
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3000;


server.get("/", (request, response) => {

    response.send({
        message: "This server works fine"
    })

});

// register
server.post("/register", async (request, response) => {
    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let email = request.body.email;
    let password = request.body.password;


    console.log(firstname);

    await client.db("whatever-database").collection("users").insertOne({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    });



    response.send({
        message: "User registered"
    })

})



server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))